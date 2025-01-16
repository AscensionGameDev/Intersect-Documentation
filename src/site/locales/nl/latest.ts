import { getCollection } from "astro:content";
import type { LocalizedNavbar, LocalizedSidebar, SidebarItem } from '../../../i18n';
import type { VersionedNamedDocument } from '../../../versioning';
import { basename, join } from 'node:path';
import { readdir } from 'node:fs/promises';
import { existsTree, readdirTree, treeFromPaths } from "../../../utils";

const version = basename(__filename, '.ts');
const locale = basename(__dirname);
const dirnameContent = join(locale);
const dirnameVersionedContent = version === 'latest' ? dirnameContent : join(dirnameContent, version);
const dirnameContentApi = join(dirnameVersionedContent, 'api');
const docs = await getCollection("docs");
const docIds = docs.map(({ id }) => id);
const docTree = treeFromPaths(docIds);
const apiVersions = readdirTree(docTree, dirnameContentApi).filter(n => n.startsWith('v') && n !== 'versions.ts');

const endpointOrder: string[] = [
	'authentication.md',
	'server-info.md',
	'users.md',
	'players.md',
	'guilds.md',
	'server-variables.md',
	'chat.md',
	'logging.md',
	'admin-actions.md',
	'game-objects.md',
	'Avatar.md',
];

const endpointsByVersion = await Promise.all(apiVersions.map(async (versionName) => {
	const dirnameVersionEndpoints = join(dirnameContentApi, versionName, 'endpoints');
	if (!existsTree(docTree, dirnameVersionEndpoints)) {
		console.warn(`[apigen] Endpoints do not exist for ${locale} ${versionName}`);
		return <VersionedNamedDocument>[versionName, []];
	}

	const endpointFiles = readdirTree(docTree, dirnameVersionEndpoints);
		const sortedEndpointFiles = endpointFiles.toSorted(
		(a, b) => {
			const aIndex = endpointOrder.indexOf(a);
			const bIndex = endpointOrder.indexOf(b);
			if (aIndex < 0) {
				if (bIndex < 0) {
					return a.localeCompare(b);
				}

				return 1;
			}

			if (bIndex < 0) {
				return -1;
			}

			if (aIndex !== bIndex) {
				return aIndex - bIndex;
			}

			return a.localeCompare(b);
		}
	);

	const endpointsForVersion: VersionedNamedDocument = [versionName, sortedEndpointFiles];
	return endpointsForVersion;
}));

const apiEndpointsSidebarSection = endpointsByVersion.flatMap(
	([versionName, endpointFiles]) => endpointFiles.map(
		endpointFileName => `/api/${versionName}/endpoints/${endpointFileName}`
	)
);

const typesByVersion = await Promise.all(apiVersions.map(async (versionName) => {
	const dirnameVersionTypes = join(dirnameContentApi, versionName, 'types');
	if (!existsTree(docTree, dirnameVersionTypes)) {
		console.warn(`[apigen] Types do not exist for ${locale} ${versionName}`);
		return <VersionedNamedDocument>[versionName, []];
	}

	const typeFiles = await readdir(dirnameVersionTypes);
	const sortedTypeFiles = typeFiles.toSorted((a, b) => a.localeCompare(b));

	const typesForVersion: VersionedNamedDocument = [versionName, sortedTypeFiles];
	return typesForVersion;
}));

const apiTypesSidebarSection = typesByVersion.flatMap(
	([versionName, typeFiles]) => typeFiles.map(
		typeFileName => `/api/${versionName}/types/${typeFileName}`
	)
);

const apiSidebarItems: SidebarItem[] = [];
if (apiTypesSidebarSection.length > 0) {
	apiSidebarItems.push({
		title: 'Types',
		collapsible: true,
		children: apiTypesSidebarSection,
	});
}

export const navbar: LocalizedNavbar = [
	{
		title: 'Gebruikers Documenten',
		link: '/',
	},
	{
		title: 'API Referentie',
		link: '/api/v1/',
	},
	{
		title: 'Gidsen voor ontwikkelaars',
		link: '/developer/',
	},
	{
		title: 'Support Community',
		link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
	},
];

export const sidebar: LocalizedSidebar = {
	'/api/v1/': [
		{
			title: 'API Informatie',
			collapsible: true,
			children: [
				'/api/v1/',
				'/api/v1/introduction/setup.md',
				'/api/v1/introduction/config.md',
				'/api/v1/introduction/roles.md',
			],
		},
		{
			title: 'Eindpunten',
			collapsible: true,
			children: apiEndpointsSidebarSection,
		},
		{
			title: 'Geavanceerd',
			collapsible: true,
			children: ['/api/v1/advanced/securing.md'],
		},
	],
	'/developer/': [
		{
			title: 'Introductie',
			collapsible: true,
			children: ['/developer/'],
		},
		{
			title: 'Aan de slag',
			collapsible: true,
			children: [
				'/developer/start/vs.md',
				'/developer/start/github.md',
				'/developer/start/compiling.md',
			],
		},
		{
			title: 'Repository',
			collapsible: true,
			children: [
				'/developer/repository/',
				'/developer/repository/branches.md',
				'/developer/repository/file-structure.md',
				'/developer/repository/forking.md',
			],
		},
		{
			title: 'Veranderingen maken',
			collapsible: true,
			children: [
				'/developer/modify/procedure.md',
				'/developer/modify/merging.md',
				'/developer/modify/conflicts.md',
			],
		},
		{
			title: 'Bijgewerkt blijven',
			collapsible: true,
			children: ['/developer/pullrequests/pulling.md'],
		},
		{
			title: 'Delen en bijdragen',
			collapsible: true,
			children: [
				'/developer/sharing/creating.md',
				'/developer/sharing/applying.md',
				'/developer/sharing/contributing.md',
			],
		},
		{
			title: 'Geavanceerd',
			collapsible: true,
			children: [
				'/developer/advanced/database.md',
				'/developer/advanced/packets.md',
				'/developer/advanced/eventcommands.md',
			],
		},
	],
	'/': [
		{
			title: 'Project Informatie',
			collapsible: true,
			children: ['/', '/project/about.md'],
		},
		{
			title: 'Aan de slag',
			collapsible: true,
			children: [
				'/start/download.md',
				'/start/setup.md',
				'/start/login.md',
				'/start/overview.md',
			],
		},
		{
			title: 'Editors',
			collapsible: true,
			children: [
				'/design/animations.md',
				'/design/classes.md',
				'/design/conditions.md',
				'/design/crafting.md',
				'/design/items.md',
				'/design/lighting.md',
				'/design/mapping.md',
				'/design/npcs.md',
				'/design/projectiles.md',
				'/design/quests.md',
				'/design/resources.md',
				'/design/shops.md',
				'/design/spells.md',
				'/design/resources.md',
				'/design/time.md',
				'/design/world.md',
			],
		},
		{
			title: 'Events',
			collapsible: true,
			children: [
				'/events/introduction.md',
				'/events/commands.md',
				'/events/pages.md',
				'/events/common.md',
				'/events/examples.md',
			],
		},
		{
			title: 'Configuratie',
			collapsible: true,
			children: [
				'/configuration/client-editor.md',
				'/configuration/server.md',
				'/configuration/server-database.md',
				'/configuration/server-security.md',
				'/configuration/equipment.md',
				{
					title: 'Geavanceerd',
					collapsible: true,
					children: [
						'/advanced/assets.md',
						'/advanced/fonts.md',
						'/advanced/formulas.md',
						'/advanced/translations.md',
						'/advanced/interface.md',
						'/advanced/zdimensions.md',
						'/advanced/sizes.md',
						'/advanced/passwords.md',
					],
				},
			],
		},
		{
			title: 'Deployment',
			collapsible: true,
			children: [
				'/deploy/forwarding.md',
				'/deploy/distributing.md',
				'/deploy/updater.md',
			],
		},
		{
			title: 'Upgraden',
			collapsible: true,
			children: ['/upgrade/upgrading.md'],
		},
	],
};
