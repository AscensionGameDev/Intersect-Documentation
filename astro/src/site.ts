import type { Site } from './i18n';

function joinPath(...segments: string[]) {
	return segments.join('/').replace(/\/{2,}/, '/');
}

export function getPathInRepo(documentId: string) {
	if ('editUrl' in SITE && SITE.editUrl !== undefined) {
		return documentId;
	} else if ('repository' in SITE) {
		const { repository } = SITE;
		switch (repository.type) {
			case 'github':
				return joinPath(repository.pathInRepository ?? '', documentId);

			case 'git':
				return documentId;

			default:
				throw new Error('Not implemented');
		}
	}

	throw new Error('Unreachable');
}

export function getEditUrl(documentId: string) {
	if ('editUrl' in SITE && SITE.editUrl !== undefined) {
		const editUrl = new URL(SITE.editUrl);
		editUrl.pathname = joinPath(editUrl.pathname, documentId);
		return editUrl;
	} else if ('repository' in SITE) {
		const { repository } = SITE;
		switch (repository.type) {
			case 'github':
				return new URL(
					joinPath(
						`https://github.com/${repository.name}/tree/${repository.branchName}`,
						repository.pathInRepository ?? '',
						documentId
					)
				);

			case 'git': {
				const gitUrl = new URL(repository.baseUrl);
				gitUrl.pathname = joinPath(gitUrl.pathname, documentId);
				return gitUrl;
			}

			default:
				throw new Error('Not implemented');
		}
	}

	throw new Error('Unreachable');
}

export const SITE: Site = {
	defaultLanguage: 'en-US',
	// repository: {
	//     type: 'github',
	//     name: 'AscensionGameDev/Intersect-Documentation',
	//     branchName: 'main',
	//     pathInRepository: 'src/content/docs'
	// },
	repository: {
		type: 'git',
		baseUrl: new URL(
			'https://github.com/AscensionGameDev/Intersect-Documentation/tree/main/src/content/docs'
		),
	},
	communityUrl: new URL('https://discord.gg/qaJ8kRmdKA'),
	editUrl: new URL(
		'https://github.com/AscensionGameDev/Intersect-Documentation/tree/main/src/content/docs'
	),
	'en-US': {
		title: 'Intersect Documentation',
		description: 'The free, open-source, modern 2d mmorpg maker.',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		navbar: {
			latest: [
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
			],
		},
		sidebar: {
			'/api/v1/': [
				{
					title: 'API Information',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/configuration.md',
						'/api/v1/introduction/roles.md',
						'/api/v1/advanced/securing.md',
					],
				},
				{
					title: 'Endpoints',
					collapsable: true,
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
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Tools',
					collapsable: true,
					children: ['/api/tools/hash-generators.md'],
				},
			],
			'/developer/': [
				{
					title: 'Introduction',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: 'Getting Started',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Repository',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Making Changes',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Staying up to Date',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Sharing & Contributions',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Advanced',
					collapsable: true,
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
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Getting Started',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editors',
					collapsable: true,
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
					collapsable: true,
					children: [
						'/events/introduction.md',
						'/events/commands.md',
						'/events/pages.md',
						'/events/common.md',
						'/events/examples.md',
					],
				},
				{
					title: 'Configuration',
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Advanced',
							collapsable: true,
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
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: 'Upgrading',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	es: {
		title: 'Documentación de Intersect',
		description:
			'El creador moderno de MMORPG 2D gratuito y de código abierto.',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		sidebar: {
			'/api/v1/': [
				{
					title: 'Información de la API',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Puntos de Conexión',
					collapsable: true,
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
					title: 'Avanzado',
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Herramientas',
					collapsable: true,
					children: ['/api/tools/hash-generators.md'],
				},
			],
			'/developer/': [
				{
					title: 'Introducción',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: 'Primeros pasos',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Repositorio',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Realizar cambios',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Mantenerse al día',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Compartir y contribuir',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avanzado',
					collapsable: true,
					children: [
						'/developer/advanced/database.md',
						'/developer/advanced/packets.md',
						'/developer/advanced/eventcommands.md',
					],
				},
			],
			'/': [
				{
					title: 'Información del Proyecto',
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Primeros pasos',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editores',
					collapsable: true,
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
					title: 'Eventos',
					collapsable: true,
					children: [
						'/events/introduction.md',
						'/events/commands.md',
						'/events/pages.md',
						'/events/common.md',
						'/events/examples.md',
					],
				},
				{
					title: 'Configuración',
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avanzado',
							collapsable: true,
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
					title: 'Despliegue',
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: 'Actualizando',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	fr: {
		title: 'Documentation Intersect',
		description:
			'Le moteur moderne de création de mmorpg 2d, open source et gratuit.',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		sidebar: {
			'/api/v1/': [
				{
					title: 'Information API',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Points de terminaison',
					collapsable: true,
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
					title: 'Avancé',
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Outils',
					collapsable: true,
					children: ['/api/tools/hash-generators.md'],
				},
			],
			'/developer/': [
				{
					title: 'Introduction',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: 'Commencer',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Dépots',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Faire des Changements',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Rester à Jour',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Partager & Contribuer',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avancé',
					collapsable: true,
					children: [
						'/developer/advanced/database.md',
						'/developer/advanced/packets.md',
						'/developer/advanced/eventcommands.md',
					],
				},
			],
			'/': [
				{
					title: 'Informations Projet',
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Commencer',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editeurs',
					collapsable: true,
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
					title: 'Evènement',
					collapsable: true,
					children: [
						'/events/introduction.md',
						'/events/commands.md',
						'/events/pages.md',
						'/events/common.md',
						'/events/examples.md',
					],
				},
				{
					title: 'Configuration',
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avancé',
							collapsable: true,
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
					title: 'Déploiement du Jeu',
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: 'Mise à jour',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	it: {
		disabled: true,
		title: 'Documentazione di Intersect',
		description: '<<todo:it>>The free, open-source, modern 2d mmorpg maker.',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		sidebar: {
			'/api/v1/': [
				{
					title: '<<todo:it>>API Information',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: '<<todo:it>>Endpoints',
					collapsable: true,
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
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
			],
			'/developer/': [
				{
					title: '<<todo:it>>Introduction',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: '<<todo:it>>Getting Started',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: '<<todo:it>>Repository',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: '<<todo:it>>Making Changes',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: '<<todo:it>>Staying up to Date',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: '<<todo:it>>Sharing & Contributions',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: '<<todo:it>>Advanced',
					collapsable: true,
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
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: '<<todo:it>>Getting Started',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: '<<todo:it>>Editors',
					collapsable: true,
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
					collapsable: true,
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
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: '<<todo:it>>Advanced',
							collapsable: true,
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
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: '<<todo:it>>Upgrading',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	nl: {
		disabled: true,
		title: 'Intersect Documentatie',
		description: 'De gratis, open-source, moderne 2d mmorpg maker.',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		sidebar: {
			'/api/v1/': [
				{
					title: 'API Informatie',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Eindpunten',
					collapsable: true,
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
					title: 'Geavanceerd',
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
			],
			'/developer/': [
				{
					title: 'Introductie',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: 'Aan de slag',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Repository',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Veranderingen maken',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Bijgewerkt blijven',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Delen en bijdragen',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Geavanceerd',
					collapsable: true,
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
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Aan de slag',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editors',
					collapsable: true,
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
					collapsable: true,
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
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Geavanceerd',
							collapsable: true,
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
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: 'Upgraden',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	'pt-BR': {
		title: 'Documentação do Intersect',
		description: 'O criador de mmorpg 2d moderno, open-source, gratuito',
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
		},
		sidebar: {
			'/api/v1/': [
				{
					title: 'Informação API',
					collapsable: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Endpoints',
					collapsable: true,
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
					title: 'Avançado',
					collapsable: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Tools',
					collapsable: true,
					children: ['/api/tools/hash-generators.md'],
				},
			],
			'/developer/': [
				{
					title: '<<todo:pt-BR>>Introduction',
					collapsable: true,
					children: ['/developer/'],
				},
				{
					title: 'Começando',
					collapsable: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: '<<todo:pt-BR>>Repository',
					collapsable: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Fazendo mudanças',
					collapsable: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Mantendo-se atualizado',
					collapsable: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Compartilhamento e contribuições',
					collapsable: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avançado',
					collapsable: true,
					children: [
						'/developer/advanced/database.md',
						'/developer/advanced/packets.md',
						'/developer/advanced/eventcommands.md',
					],
				},
			],
			'/': [
				{
					title: 'Informações do Projeto',
					collapsable: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Começando',
					collapsable: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editores',
					collapsable: true,
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
					title: 'Eventos',
					collapsable: true,
					children: [
						'/events/introduction.md',
						'/events/commands.md',
						'/events/pages.md',
						'/events/common.md',
						'/events/examples.md',
					],
				},
				{
					title: 'Configuração',
					collapsable: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avançado',
							collapsable: true,
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
					title: 'Distribuição',
					collapsable: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/packing.md',
						'/deploy/distributing.md',
						'/deploy/autoupdater.md',
					],
				},
				{
					title: 'Atualizando',
					collapsable: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
};
