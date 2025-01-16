import { Argument, Command, Option, program } from 'commander';
import { mkdir, readdir, readFile, rmdir, unlink, writeFile } from 'fs/promises';
import { join } from 'path';
import { OpenAPIV3, type OpenAPIV3_1 } from 'openapi-types';
import { LocalizedTitles, type TitleKey } from './localizedTitles';
import { exists } from '../../src/lib/fs';
import type { KnownLanguageCode } from '../../src/i18n';
import { SITE } from '../../src/site';

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

async function loadSwaggerJson(swaggerJsonUrl: URL, locale: KnownLanguageCode): Promise<OpenAPIV3_1.Document | null> {
	const response = await fetch(swaggerJsonUrl, {
		headers: {
			'Accept-Language': `${locale},en-US;q=0.8`,
		},
	});

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

			if (!operationObject) {
				continue;
			}

			if (!('x-generator-tags' in operationObject)) {
				console.warn(`No generator tags (x-generator-tags) found for ${method} ${route}`);
				continue;
			}

			const generatorTags = operationObject['x-generator-tags'] as string[];

			for (const tag of generatorTags) {
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

type GroupFallbackTitleKeyGenerators = Partial<Record<Group, TitleKeyOrProvider>>;

type RoutePriority = { group: Group, key?: string } & (
	{ ignore?: never, titleKey: TitleKeyOrProvider }
	| { ignore: true, titleKey?: never }
);

const fallbackGenerators: GroupFallbackTitleKeyGenerators = {
	controller: (_, k) => k as TitleKey,
};

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

type GeneratorMetadata = {
	route_priority: Partial<RoutePriority>[];
};

type LocaleTemplates = {
	authorization: string;
	authorizationAnonymous: string;
	authorizationRolesMultiple: string;
	authorizationRolesMultipleRoleset: string;
	authorizationRolesNone: string;
	authorizationSchemeBearer: string;
	endpoint: string;
	request: string;
	response: string;
	routeset: string;
};

const LocaleTemplateFileNameLookup: Record<keyof LocaleTemplates, string> = (() => {
	const dummyLocaleTemplates: LocaleTemplates = {
		authorization: '',
		authorizationAnonymous: '',
		authorizationRolesMultiple: '',
		authorizationRolesMultipleRoleset: '',
		authorizationRolesNone: '',
		authorizationSchemeBearer: '',
		endpoint: '',
		request: '',
		response: '',
		routeset: ''
	};
	return Object.assign(
		{},
		...Object.keys(dummyLocaleTemplates).map(
			key => ({
				[key]: `${key.replace(/[A-Z]/g, match => `.${match.toLocaleLowerCase()}`)}.md`,
			})
		)
	);
})();

async function loadTemplateForLocale(locale: string, templateName: keyof LocaleTemplates, fileName: string): Promise<string> {
	const pathToLocaleTemplate = join(import.meta.dirname, 'templates', locale, fileName);
	if (!await exists(pathToLocaleTemplate)) {
		if (locale === 'en-US') {
			throw new Error(`Template ${templateName} is missing for en-US? Expected to be at ${pathToLocaleTemplate}`);
		}

		console.warn(`Falling back to en-US for the ${templateName} template for ${locale}`);
		return loadTemplateForLocale('en-US', templateName, fileName);
	}

	return readFile(pathToLocaleTemplate, 'utf-8');
}

async function loadTemplatesForLocale(locale: string): Promise<LocaleTemplates> {
	const pathToLocaleTemplates = join(import.meta.dirname, 'templates', locale);
	if (!await exists(pathToLocaleTemplates)) {
		if (locale === 'en-US') {
			throw new Error('Templates are missing for en-US?');
		}

		console.warn(`Falling back to en-US for all templates for ${locale}`);
		return loadTemplatesForLocale('en-US');
	}

	const templates: Partial<LocaleTemplates> = {};
	for (const [templateName, fileName] of Object.entries(LocaleTemplateFileNameLookup) as [keyof LocaleTemplates, string][]) {
		templates[templateName] = await loadTemplateForLocale(locale, templateName, fileName);
	}
	return templates as LocaleTemplates;
}

function getPriorityGroup(partialPriority: Partial<RoutePriority>) {
	if (!partialPriority.group) {
		throw new Error(`'group' missing on ${JSON.stringify(partialPriority, null, 2)}`);
	}

	return partialPriority.group;
}

async function populateTemplate(template: string, params: Record<string, unknown>, hydrators: Record<string, (value: any) => Promise<string>>): Promise<string> {
	let populatedTemplate = template;
	for (const [key, value] of Object.entries(params)) {
		const hydrator = hydrators[key] ?? (() => value as string);
		const hydratedValue = await hydrator(value);
		populatedTemplate = populatedTemplate.replace(new RegExp(`\\$\\$${key}\\$\\$`, 'g'), hydratedValue);
	}
	return populatedTemplate;
}

async function generateAPI(...args: Args) {
	const [host, options] = args;

	const cwd = process.cwd();
	console.info(`Running API endpoint documentation generation in: ${cwd}`);

	const pathToDocs = join(cwd, 'src', 'content', 'docs');
	const locales = await readdir(pathToDocs);

	for (const locale of locales as KnownLanguageCode[]) {
		const pathToLocale = join(cwd, 'src', 'site', 'locales', locale);
		const pathToLocaleContent = join(cwd, 'src', 'content', 'docs', locale);
		const pathToApiVersion = join(pathToLocaleContent, 'api', options.apiVersion);

		const swaggerJsonUrl = resolveSwaggerJsonUrl(host, options.apiVersion, options.swaggerJson);
		const openApiSpec = await loadSwaggerJson(swaggerJsonUrl, locale);
	
		if (openApiSpec === null) {
			console.error('Unable to load the API spec, nothing generated.')
			process.exitCode = 1;
			return;
		}

		const typeLookup = new Map<string, OpenAPIV3_1.SchemaObject>(
			Object.entries(openApiSpec.components?.schemas ?? {}).map(
				([name, value]) => {
					const slugName = name.replace(/_/g, '-').replace(/`/g, '_').replace(
						/[A-Z]+/g,
						(match, offset) => `${(offset > 0 ? '-' : '')}${match.toLocaleLowerCase()}`
					);
					const title = value?.title ?? name.replace(/\`(\d+)/, (_, rawParameterCount) => `<${new Array(parseInt(rawParameterCount)).fill(null).map((_, index) => `T${index}`)}>`);
					return [slugName, {
						...value,
						title,
					}];
				}
			)
		);
		const typeFileNameSet = new Set<string>(typeLookup.keys().flatMap(slugName => [slugName, `${slugName}.md`]));
	
		if (!('x-generator-metadata' in openApiSpec)) {
			throw new Error(`'x-generator-metadata' not present in spec loaded from ${swaggerJsonUrl}`);
		}
	
		const generatorMetadata = openApiSpec['x-generator-metadata'] as GeneratorMetadata;
		const routePriorities = generatorMetadata.route_priority.map(priority => priority.ignore || priority.titleKey ? (priority as RoutePriority) : <RoutePriority>{
			...priority,
			titleKey: fallbackGenerators[getPriorityGroup(priority)],
		});
	
		const taggedPathLookup = organizePathsByTag(openApiSpec);
	
		const taggedPathsToGenerate: GroupedTaggedPath[] = [];
		const visitedKeysByGroup: Map<Group, Set<string>> = new Map<Group, Set<string>>();
		for (const { group, key, ignore, titleKey } of routePriorities) {
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
		
		const routeSetNames = routeSets.map(rs => rs.titleKey.replace(/_/g, '-'));
		const routeFileNameSet = new Set<string>(routeSetNames.flatMap(n => [n, `${n}.md`]));
		const endpointOrder = routeSetNames.map(n => `${n}.md`);
		const pathToLocalization = join(pathToLocale, 'latest.ts');

		if (!await exists(pathToLocalization)) {
			throw new Error(`Missing src/site/locales/${locale}/latest.ts`);
		}

		const pathToTypes = join(pathToApiVersion, 'types');
		if (!await exists(pathToTypes)) {
			await mkdir(pathToTypes);
		}

		const existingTypeNames = await readdir(pathToTypes);
		const typeNamesToDelete = existingTypeNames.filter(f => !typeFileNameSet.has(f));
		for (const nameToDelete of typeNamesToDelete) {
			const pathToDelete = join(pathToTypes, nameToDelete);
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

		const localizedSite = SITE[locale];

		for (const [slugName, type] of typeLookup) {
			const pathToType = join(pathToTypes, `${slugName}.md`);
			await writeFile(pathToType, `---
title: ${type.title}
---`, 'utf-8');
		}

		const pathToEndpoints = join(pathToApiVersion, 'endpoints');
		if (!await exists(pathToEndpoints)) {
			await mkdir(pathToEndpoints);
		}

		const existingEndpointNames = await readdir(pathToEndpoints);
		const endpointNamesToDelete = existingEndpointNames.filter(f => !routeFileNameSet.has(f));
		for (const nameToDelete of endpointNamesToDelete) {
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

		const localizationContents = await readFile(pathToLocalization, 'utf-8');
		const patternEndpointOrder = /const endpointOrder: string\[\] = \[(\n|[^\]])+\];/gm;
		if (!patternEndpointOrder.test(localizationContents)) {
			throw new Error(`Localization file for ${locale}/latest missing \`endpointOrder\` section`);
		}
		const updatedEndpointOrder = `const endpointOrder: string[] = [\n${endpointOrder.map(l => `\t'${l}',`).join('\n')}\n];`;
		const updatedLocalizationContents = localizationContents.replace(patternEndpointOrder, updatedEndpointOrder);
		await writeFile(pathToLocalization, updatedLocalizationContents, 'utf-8');

		const localizedTitles = LocalizedTitles[locale];
		const localeTemplates = await loadTemplatesForLocale(locale);

		for (const routeSet of routeSets) {
			const pathToEndpoint = join(pathToEndpoints, `${routeSet.titleKey.replace(/_/g, '-')}.md`);
			const routesetTemplateParams = {
				title: routeSet.titleKey in localizedTitles ? localizedTitles[routeSet.titleKey] : routeSet.titleKey,
				endpoints: routeSet.routes,
			};

			const populatedTemplate = await populateTemplate(
				localeTemplates.routeset,
				routesetTemplateParams,
				{
					endpoints: async (routes: GroupedTaggedPath[]) => {
						const formattedEndpoints: string[] = [];
						for (const route of routes) {
							let authorization = localeTemplates.authorizationAnonymous;
							if (route.security?.length) {
								if (route.security.length > 1) {
									throw new Error(`Multiple requirements are not implemented: ${route.method} ${route.route}`);
								}

								const rolesByRequirement = route.security.map(requirement => {
									const schemesForRequirement = Object.keys(requirement);
									if (schemesForRequirement.length < 1) {
										return [];
									}

									const unsupportedSchemes = schemesForRequirement.filter(scheme => scheme !== 'Bearer');
									if (unsupportedSchemes.length > 0) {
										console.warn(`Unsupported security schemes for ${route.method} ${route.route}:\n\t${unsupportedSchemes.join(', ')}`);
									}

									const bearerRoles = requirement['Bearer'];
									if (!bearerRoles) {
										console.error(`Missing Bearer scheme for ${route.method} ${route.route}`);
										return [];
									}

									return bearerRoles;
								}).filter(roles => roles.length > 0);

								const [requirement] = route.security;
								if (!requirement) {
									throw new Error(`Undefined requirement: ${route.method} ${route.route}`);
								}

								let roles = localeTemplates.authorizationRolesNone;
								if (rolesByRequirement.length === 1) {
									roles = rolesByRequirement.flat().map(role => `\`${role}\``).join(', ');
								} else if (rolesByRequirement.length > 1) {
									const rolesets: string[] = [];
									for (const roleset of rolesByRequirement) {
										rolesets.push(await populateTemplate(
											localeTemplates.authorizationRolesMultipleRoleset,
											{
												roles: roleset.map(role => `\`${role}\``).join(', ')
											},
											{}
										));
									}

									roles = await populateTemplate(localeTemplates.authorizationRolesMultiple, { rolesets: rolesets.join('\n') }, {});
								}

								authorization = await populateTemplate(localeTemplates.authorization, {
									roles,
								}, {});
							}
							const generatorTags = ('x-generator-tags' in route) ? route['x-generator-tags'] as string[] : [];
							const action = generatorTags.find(t => t.startsWith('action:'))?.replace(/^action:/, '');
							const controller = generatorTags.find(t => t.startsWith('controller:'))?.replace(/^controller:/, '');
							const endpointTemplateParams = {
								name: route.summary ?? `${action} (${controller})`,
								method: route.method,
								path: route.route,
								description: route.description ?? '',
								authorization,
								request: 'TODO',
								response: 'TODO',
							};

							if (route.deprecated === true) {
								endpointTemplateParams.name += ` (${localizedSite.general.Deprecated})`;
							}

							formattedEndpoints.push(await populateTemplate(localeTemplates.endpoint, endpointTemplateParams, {
								method: async (value) => (value as string).toLocaleUpperCase(),
							}));
						}
						return formattedEndpoints.join('\n\n---\n\n');
					}
				}
			);

			await writeFile(pathToEndpoint, populatedTemplate, 'utf-8');
			// process.exit(0);
		}
		// debugger;
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
