import type { LocalizedNavbar, LocalizedSidebar } from '../../../i18n';

export const navbar: LocalizedNavbar = [
	{
		title: 'Documentazione utente',
		link: '/',
	},
	{
		title: 'Referimento delle Web API',
		link: '/api/v1/',
	},
	{
		title: 'Guide per sviluppatori',
		link: '/developer/',
	},
	{
		title: 'Comunità di supporto (Inglese)',
		link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
	},
];

export const sidebar: LocalizedSidebar = {
	'/api/v1/': [
		{
			title: '<<todo:it>>API Information',
			collapsible: true,
			children: [
				'/api/v1/',
				'/api/v1/introduction/setup.md',
				'/api/v1/introduction/config.md',
				'/api/v1/introduction/roles.md',
			],
		},
		{
			title: '<<todo:it>>Endpoints',
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
			title: '<<todo:it>>Advanced',
			collapsible: true,
			children: ['/api/v1/advanced/securing.md'],
		},
	],
	'/developer/': [
		{
			title: '<<todo:it>>Introduction',
			collapsible: true,
			children: ['/developer/'],
		},
		{
			title: '<<todo:it>>Getting Started',
			collapsible: true,
			children: [
				'/developer/start/vs.md',
				'/developer/start/github.md',
				'/developer/start/compiling.md',
			],
		},
		{
			title: '<<todo:it>>Repository',
			collapsible: true,
			children: [
				'/developer/repository/',
				'/developer/repository/branches.md',
				'/developer/repository/file-structure.md',
				'/developer/repository/forking.md',
			],
		},
		{
			title: '<<todo:it>>Making Changes',
			collapsible: true,
			children: [
				'/developer/modify/procedure.md',
				'/developer/modify/merging.md',
				'/developer/modify/conflicts.md',
			],
		},
		{
			title: '<<todo:it>>Staying up to Date',
			collapsible: true,
			children: ['/developer/pullrequests/pulling.md'],
		},
		{
			title: '<<todo:it>>Sharing & Contributions',
			collapsible: true,
			children: [
				'/developer/sharing/creating.md',
				'/developer/sharing/applying.md',
				'/developer/sharing/contributing.md',
			],
		},
		{
			title: '<<todo:it>>Advanced',
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
			title: '<<todo:it>>Project Information',
			collapsible: true,
			children: ['/', '/project/about.md'],
		},
		{
			title: '<<todo:it>>Getting Started',
			collapsible: true,
			children: [
				'/start/download.md',
				'/start/setup.md',
				'/start/login.md',
				'/start/overview.md',
			],
		},
		{
			title: '<<todo:it>>Editors',
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
			title: '<<todo:it>>Events',
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
			title: '<<todo:it>>Configuration',
			collapsible: true,
			children: [
				'/configuration/client-editor.md',
				'/configuration/server.md',
				'/configuration/server-database.md',
				'/configuration/server-security.md',
				'/configuration/equipment.md',
				{
					title: '<<todo:it>>Advanced',
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
			title: '<<todo:it>>Deployment',
			collapsible: true,
			children: [
				'/deploy/forwarding.md',
				'/deploy/distributing.md',
				'/deploy/updater.md',
			],
		},
		{
			title: '<<todo:it>>Upgrading',
			collapsible: true,
			children: ['/upgrade/upgrading.md'],
		},
	],
};
