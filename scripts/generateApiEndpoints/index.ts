import { Argument, Command, Option, program } from 'commander';
import { mkdir, readdir, rmdir, unlink } from 'fs/promises';
import { join } from 'path';
import { OpenAPIV3, type OpenAPIV3_1 } from 'openapi-types';
import { type TitleKey } from './localizedTitles';
import { exists } from '../../src/lib/fs';

type Options = {
	apiVersion: string;
	swaggerJson: URL | null;
};

type Args = [URL, Options, Command];

type TaggedPath = OpenAPIV3_1.OperationObject & {
	method: OpenAPIV3.HttpMethods;
	route: string;
};

type TaggedPathLookup = {
	action: Map<string, TaggedPath[]>;
	controller: Map<string, TaggedPath[]>;
	enum: Map<string, TaggedPath[]>;
	method: Map<string, TaggedPath[]>;
	option: Map<string, TaggedPath[]>;
	uncategorized: Map<string, TaggedPath[]>;
};

type Group = keyof TaggedPathLookup;

function resolveSwaggerJsonUrl(host: URL, apiVersion: string, swaggerJsonUrl: URL | null): URL {
	if (swaggerJsonUrl instanceof URL) {
		return swaggerJsonUrl;
	}

	return new URL(`/swagger/${apiVersion}/swagger.json`, host);
}

async function loadSwaggerJson(swaggerJsonUrl: URL): Promise<OpenAPIV3_1.Document | null> {
	const response = await fetch(swaggerJsonUrl);
	if (!response.ok) {
		console.error(`Failed to fetch OpenAPI spec from ${swaggerJsonUrl}, ${response.status} ${response.statusText}`);
		if (response.headers.get('content-type')?.startsWith('application/json')) {
			const errorBody = await response.json();
			console.error(errorBody);
		} else if (parseInt(response.headers.get('content-length') ?? '0') > 0) {
			const errorBody = await response.text();
			console.error(`\t${errorBody}`);
		}
		return null;
	}

	if (!response.headers.get('content-type')?.startsWith('application/json')) {
		console.error(`The response content from ${swaggerJsonUrl} was '${response.headers.get('content-type')}' but 'application/json' was expected`);
		return null;
	}

	const typelessDocument = await response.json();
	if (typeof typelessDocument !== 'object') {
		console.error(`The response from ${swaggerJsonUrl} was expected to be an object but was a ${typeof typelessDocument} instead`);
		console.error(typelessDocument);
		return null;
	}

	if (typelessDocument === null) {
		return null;
	}

	return typelessDocument as OpenAPIV3_1.Document;
}

function split(str: string, delimeter: string, times?: number): string[] {
	const parts: string[] = [];

	let index = 0;
	while (index > -1) {
		if (typeof times === 'number' && times <= parts.length + 1) {
			parts.push(str.slice(index));
			break;
		}

		const startIndex = index;
		index = str.indexOf(delimeter, startIndex);

		const endIndex = index < 1 ? str.length : index;

		if (index > -1) {
			++index;
		}

		parts.push(str.slice(startIndex, endIndex));
	}

	return parts;
}

function getTaggedPathsFor(lookup: TaggedPathLookup, group: Group, key: string): TaggedPath[] {
	if (!(group in lookup)) {
		throw new Error(`Unrecognized tag group '${group}`);
	}

	const keyableLookup = lookup as { [groupKey: string]: Map<string, TaggedPath[]> };
	const taggedPathGroup: Map<String, TaggedPath[]> = keyableLookup[group]!;
	let taggedPaths = taggedPathGroup.get(key);
	if (taggedPaths === undefined) {
		taggedPaths = [];
		taggedPathGroup.set(key, taggedPaths);
	}
	return taggedPaths;
}

function organizePathsByTag(document: OpenAPIV3_1.Document): TaggedPathLookup {
	const taggedPathLookup: TaggedPathLookup = {
		action: new Map<string, TaggedPath[]>(),
		controller: new Map<string, TaggedPath[]>(),
		enum: new Map<string, TaggedPath[]>(),
		method: new Map<string, TaggedPath[]>(),
		option: new Map<string, TaggedPath[]>(),
		uncategorized: new Map<string, TaggedPath[]>(),
	};

	for (const [route, pathObject] of Object.entries(document.paths ?? {})) {
		if (!pathObject) {
			continue;
		}

		for (const method of Object.values(OpenAPIV3.HttpMethods)) {
			const operationObject = pathObject[method];

			for (const tag of operationObject?.tags ?? []) {
				const parts = split(tag, ':', 2);
				const [tagGroup, tagKey] = parts;

				let taggedPaths: TaggedPath[];

				if (!tagGroup || !tagKey) {
					console.warn(`Unrecognized tag format '${tag}' for ${method} on ${route}`);
					taggedPaths = getTaggedPathsFor(taggedPathLookup, 'uncategorized', tag);
				} else {
					taggedPaths = getTaggedPathsFor(taggedPathLookup, tagGroup as Group, tagKey);
				}

				taggedPaths.push(Object.assign({}, operationObject, { method, route }));
			}
		}
	}

	return taggedPathLookup;
}

type TitleKeyProvider = (group: Group, key?: string) => TitleKey;
type TitleKeyOrProvider = TitleKey | TitleKeyProvider;

type PathPriority = { group: Group, key?: string } & (
	{ ignore?: never, titleKey: TitleKeyOrProvider }
	| { ignore: true, titleKey?: never }
);

const pathPriorities: PathPriority[] = [
	{ group: 'controller', key: 'OAuth', titleKey: 'authentication' },
	{ group: 'controller', key: 'Info', titleKey: 'server_info' },
	{ group: 'controller', key: 'User', titleKey: 'users' },
	{ group: 'controller', key: 'Player', titleKey: 'players' },
	{ group: 'controller', key: 'Guild', titleKey: 'guilds' },
	{ group: 'controller', key: 'Variables', titleKey: 'server_variables' },
	{ group: 'controller', key: 'Chat', titleKey: 'chat' },
	{ group: 'controller', key: 'Logs', titleKey: 'logging' },
	{ group: 'controller', key: 'RootInfo', ignore: true },
	{ group: 'controller', key: 'Demo', ignore: true },
	{ group: 'enum', key: 'AdminAction', titleKey: 'admin_actions' },
	{ group: 'controller', key: 'GameObject', titleKey: 'game_objects' },
	{ group: 'controller', titleKey: (g, k) => (k ? `${g}_${k}` : g).toLocaleLowerCase() as TitleKey },
];

const methodPriorities: Array<OpenAPIV3_1.HttpMethods> = [
	OpenAPIV3.HttpMethods.GET,
	OpenAPIV3.HttpMethods.POST,
	OpenAPIV3.HttpMethods.DELETE,
	OpenAPIV3.HttpMethods.PATCH,
	OpenAPIV3.HttpMethods.PUT,
];

function compareMethod(a: TaggedPath, b: TaggedPath): number {
	const aIndex = methodPriorities.indexOf(a.method);
	const bIndex = methodPriorities.indexOf(b.method);
	if (aIndex < 0) {
		if (bIndex < 0) {
			return a.method.localeCompare(b.method);
		}

		return 1;
	}

	if (bIndex < 0) {
		return -1;
	}

	return aIndex - bIndex;
}

type GroupedTaggedPath = TaggedPath & { group: Group, key?: string, titleKey: TitleKey };

type RouteSet = {
	group: Group;
	key?: string;
	titleKey: TitleKey;
	routes: GroupedTaggedPath[];
};

async function generateAPI(...args: Args) {
	const [host, options] = args;

	const cwd = process.cwd();
	console.info(`Running API endpoint documentation generation in: ${cwd}`);

	const swaggerJsonUrl = resolveSwaggerJsonUrl(host, options.apiVersion, options.swaggerJson);
	const openApiSpec = await loadSwaggerJson(swaggerJsonUrl);

	if (openApiSpec === null) {
		console.error('Unable to load the API spec, nothing generated.')
		process.exitCode = 1;
		return;
	}

	const taggedPathLookup = organizePathsByTag(openApiSpec);

	const taggedPathsToGenerate: GroupedTaggedPath[] = [];
	const visitedKeysByGroup: Map<Group, Set<string>> = new Map<Group, Set<string>>();
	for (const { group, key, ignore, titleKey } of pathPriorities) {
		const keysToVisit: string[] = [];

		let set = visitedKeysByGroup.get(group);
		if (set === undefined) {
			set = new Set<string>();
			visitedKeysByGroup.set(group, set);
		}

		if (key !== undefined) {
			keysToVisit.push(key);
			set.add(key);
		} else {
			for (const groupKey of taggedPathLookup[group].keys()) {
				if (set.has(groupKey)) {
					continue;
				}

				keysToVisit.push(groupKey);
			}
		}

		if (ignore === true) {
			continue;
		}

		for (const keyToVisit of keysToVisit) {
			set.add(keyToVisit);
			const pathsForKey = taggedPathLookup[group].get(keyToVisit);
			if (pathsForKey === undefined) {
				continue;
			}

			const sortedPaths = pathsForKey.toSorted(compareMethod);
			for (const taggedPath of sortedPaths) {
				taggedPathsToGenerate.push(<GroupedTaggedPath>{
					...taggedPath,
					group,
					key: keyToVisit,
					titleKey: typeof titleKey === 'string' ? titleKey : titleKey(group, keyToVisit),
				});
			}
		}
	}

	const routeSets: RouteSet[] = [];
	let currentRouteSet: RouteSet | undefined;
	for (const gtp of taggedPathsToGenerate) {
		if (!currentRouteSet || currentRouteSet.group !== gtp.group || currentRouteSet.key !== gtp.key || currentRouteSet.titleKey !== gtp.titleKey) {
			currentRouteSet = <RouteSet>{
				group: gtp.group,
				key: gtp.key,
				titleKey: gtp.titleKey,
				routes: [gtp],
			};
			routeSets.push(currentRouteSet);
			continue;
		}
		
		currentRouteSet.routes.push(gtp);
	}

	const pathToDocs = join(cwd, 'src', 'content', 'docs');
	const locales = await readdir(pathToDocs);
	
	const routeNameSet = new Set<string>(routeSets.map(rs => `${rs.titleKey.replace(/_/g, '-')}`).flatMap(n => [n, `${n}.md`]));

	for (const locale of locales) {
		const pathToEndpoints = join(cwd, 'src', 'content', 'docs', locale, 'api', options.apiVersion, 'endpoints');
		
		if (!await exists(pathToEndpoints)) {
			await mkdir(pathToEndpoints);
		}

		const existingEndpointNames = await readdir(pathToEndpoints);
		const namesToDelete = existingEndpointNames.filter(f => !routeNameSet.has(f));
		for (const nameToDelete of namesToDelete) {
			const pathToDelete = join(pathToEndpoints, nameToDelete);
			try {
				await unlink(pathToDelete);
			} catch {
				try {
					await rmdir(pathToDelete, { recursive: true });
				} catch {
					console.warn(`Failed to delete endpoint: ${nameToDelete}`);
				}
			}
		}

		debugger;
	}
}

program
	.version('0.1.0')
	.description('Generates API endpoints for the latest version against a live Intersect server API')
	.addArgument(new Argument('<host>').default(URL.parse('http://localhost:5400/')).argOptional().argParser(rawValue => URL.parse(rawValue)))
	.addOption(new Option('-a, --api-version <value>').default('v1'))
	.addOption(new Option('--swagger-json <value>').default(null).argParser(rawValue => typeof rawValue !== 'string' || !rawValue.trim() ? null : URL.parse(rawValue)))
	.action(generateAPI)
	.parse(process.argv);
