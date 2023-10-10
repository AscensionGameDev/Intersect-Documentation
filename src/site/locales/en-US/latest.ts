import type { LocalizedNavbar, LocalizedSidebar } from '../../../i18n';

export const navbar: LocalizedNavbar = [
	{
		title: 'User Docs',
		link: '/',
	},
	{
		title: 'API Reference',
		link: '/api/v1/',
	},
	{
		title: 'Developer Guides',
		link: '/developer/',
	},
	{
		title: 'Support Community',
		link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
	},
];

export const sidebar: LocalizedSidebar = {
	'/api/': [
		{
			title: 'API Information',
			collapsible: true,
			children: [
				'/api/v1/',
				'/api/v1/introduction/setup.md',
				'/api/v1/introduction/configuration.md',
				'/api/v1/introduction/roles.md',
			],
		},
		{
			title: 'Endpoints',
			collapsible: true,
			children: [
				'/api/v1/endpoints/authentication.md',
				'/api/v1/endpoints/admin.md',
				'/api/v1/endpoints/chat.md',
				'/api/v1/endpoints/gameobjects.md',
				'/api/v1/endpoints/info.md',
				'/api/v1/endpoints/logs.md',
				'/api/v1/endpoints/players.md',
				'/api/v1/endpoints/users.md',
				'/api/v1/endpoints/variables.md',
			],
		},
		{
			title: 'Advanced',
			collapsible: true,
			children: ['/api/v1/advanced/securing.md'],
		},
		{
			title: 'Tools',
			collapsible: true,
			children: ['/api/tools/hash-generators.mdx'],
		},
	],
	'/developer/': [
		{
			title: 'Introduction',
			collapsible: true,
			children: ['/developer/'],
		},
		{
			title: 'Getting Started',
			collapsible: true,
			children: [
				'/developer/start/prerequisites.md',
				'/developer/start/vs.md',
				'/developer/start/rider.md',
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
			title: 'Making Changes',
			collapsible: true,
			children: [
				'/developer/modify/procedure.md',
				'/developer/modify/merging.md',
				'/developer/modify/conflicts.md',
			],
		},
		{
			title: 'Staying up to Date',
			collapsible: true,
			children: ['/developer/pullrequests/pulling.md'],
		},
		{
			title: 'Sharing & Contributions',
			collapsible: true,
			children: [
				'/developer/sharing/creating.md',
				'/developer/sharing/applying.md',
				'/developer/sharing/contributing.md',
			],
		},
		{
			title: 'Advanced',
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
			title: 'Project Information',
			collapsible: true,
			children: ['/', '/project/about.md'],
		},
		{
			title: 'Getting Started',
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
				{
					title: 'Animations',
					collapsible: true,
					children: [
						'/design/animations/index.md',
						'/design/animations/telegraphing.md',
					],
				},
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
				'/events/common.md',
				'/events/eventcommands.md',
				'/events/chatcommands.md',
				'/events/pages.md',
				'/events/examples.md',
				
			],
		},
		{
			title: 'Configuration',
			collapsible: true,
			children: [
				'/configuration/client-editor.md',
				'/configuration/server.md',
				'/configuration/server-database.md',
				'/configuration/server-security.md',
				'/configuration/equipment.md',
				{
					title: 'Advanced',
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
			title: 'Upgrading',
			collapsible: true,
			children: ['/upgrade/upgrading.md'],
		},
	],
};
