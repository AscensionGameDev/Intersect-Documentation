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
		components: {
			HashGenerator: {
				digestPlaceholder:
					'This will update with the hash once input is provided',
				inputPlaceholder:
					'Input text to be hashed (this is treated like a password!)',
			},
			VersionPicker: { Latest: 'Latest' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'On this page',
			More: 'More',
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
			'v0.7.1-beta': [
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
			'v0.7.1-beta': {
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
			},
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
		},
	},
	es: {
		title: 'Documentación de Intersect',
		description:
			'El creador moderno de MMORPG 2D gratuito y de código abierto.',
		components: {
			HashGenerator: {
				digestPlaceholder:
					'This will update with the hash once input is provided',
				inputPlaceholder:
					'Input text to be hashed (this is treated like a password!)',
			},
			VersionPicker: { Latest: 'Ultima' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'En esta página',
			More: 'Más',
		},
		navbar: {
			latest: [
				{
					title: 'Documentación de usuario',
					link: '/',
				},
				{
					title: 'Referencia para API Web',
					link: '/api/v1/',
				},
				{
					title: 'Guías de Desarrollador',
					link: '/developer/',
				},
				{
					title: 'Comunidad de soporte (Inglés)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
			'v0.7.1-beta': [
				{
					title: 'Documentación de usuario',
					link: '/',
				},
				{
					title: 'Referencia para API Web',
					link: '/api/v1/',
				},
				{
					title: 'Guías de Desarrollador',
					link: '/developer/',
				},
				{
					title: 'Comunidad de soporte (Inglés)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
		},
		sidebar: {
			'v0.7.1-beta': {
				'/api/v1/': [
					{
						title: 'Información de la API',
						collapsible: true,
						children: [
							'/api/v1/',
							'/api/v1/introduction/setup.md',
							'/api/v1/introduction/config.md',
							'/api/v1/introduction/roles.md',
						],
					},
					{
						title: 'Puntos de Conexión',
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
						title: 'Avanzado',
						collapsible: true,
						children: ['/api/v1/advanced/securing.md'],
					},
					{
						title: 'Herramientas',
						collapsible: true,
						children: ['/api/tools/hash-generators.mdx'],
					},
				],
				'/developer/': [
					{
						title: 'Introducción',
						collapsible: true,
						children: ['/developer/'],
					},
					{
						title: 'Primeros pasos',
						collapsible: true,
						children: [
							'/developer/start/vs.md',
							'/developer/start/github.md',
							'/developer/start/compiling.md',
						],
					},
					{
						title: 'Repositorio',
						collapsible: true,
						children: [
							'/developer/repository/',
							'/developer/repository/branches.md',
							'/developer/repository/file-structure.md',
							'/developer/repository/forking.md',
						],
					},
					{
						title: 'Realizar cambios',
						collapsible: true,
						children: [
							'/developer/modify/procedure.md',
							'/developer/modify/merging.md',
							'/developer/modify/conflicts.md',
						],
					},
					{
						title: 'Mantenerse al día',
						collapsible: true,
						children: ['/developer/pullrequests/pulling.md'],
					},
					{
						title: 'Compartir y contribuir',
						collapsible: true,
						children: [
							'/developer/sharing/creating.md',
							'/developer/sharing/applying.md',
							'/developer/sharing/contributing.md',
						],
					},
					{
						title: 'Avanzado',
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
						title: 'Información del Proyecto',
						collapsible: true,
						children: ['/', '/project/about.md'],
					},
					{
						title: 'Primeros pasos',
						collapsible: true,
						children: [
							'/start/download.md',
							'/start/setup.md',
							'/start/login.md',
							'/start/overview.md',
						],
					},
					{
						title: 'Editores',
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
						title: 'Eventos',
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
						title: 'Configuración',
						collapsible: true,
						children: [
							'/configuration/client-editor.md',
							'/configuration/server.md',
							'/configuration/server-database.md',
							'/configuration/server-security.md',
							'/configuration/equipment.md',
							{
								title: 'Avanzado',
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
						title: 'Despliegue',
						collapsible: true,
						children: [
							'/deploy/forwarding.md',
							'/deploy/distributing.md',
							'/deploy/updater.md',
						],
					},
					{
						title: 'Actualizando',
						collapsible: true,
						children: ['/upgrade/upgrading.md'],
					},
				],
			},
			'/api/v1/': [
				{
					title: 'Información de la API',
					collapsible: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Puntos de Conexión',
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
					title: 'Avanzado',
					collapsible: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Herramientas',
					collapsible: true,
					children: ['/api/tools/hash-generators.mdx'],
				},
			],
			'/developer/': [
				{
					title: 'Introducción',
					collapsible: true,
					children: ['/developer/'],
				},
				{
					title: 'Primeros pasos',
					collapsible: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Repositorio',
					collapsible: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Realizar cambios',
					collapsible: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Mantenerse al día',
					collapsible: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Compartir y contribuir',
					collapsible: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avanzado',
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
					title: 'Información del Proyecto',
					collapsible: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Primeros pasos',
					collapsible: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editores',
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
					title: 'Eventos',
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
					title: 'Configuración',
					collapsible: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avanzado',
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
					title: 'Despliegue',
					collapsible: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/distributing.md',
						'/deploy/updater.md',
					],
				},
				{
					title: 'Actualizando',
					collapsible: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	fr: {
		title: 'Documentation Intersect',
		description:
			'Le moteur moderne de création de mmorpg 2d, open source et gratuit.',
		components: {
			HashGenerator: {
				digestPlaceholder:
					'Cela sera mis à jour avec le hachage une fois l\'entrée fournie',
				inputPlaceholder:
					'Saisissez le texte à hacher (ceci est traité comme un mot de passe !)',
			},
			VersionPicker: { Latest: 'Latest' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'On this page',
			More: 'More',
		},
		navbar: {
			latest: [
				{
					title: 'Documents utilisateur',
					link: '/',
				},
				{
					title: 'Référence de l\'API Web',
					link: '/api/v1/',
				},
				{
					title: 'Guides pour développeurs',
					link: '/developer/',
				},
				{
					title: 'Communauté de support (Anglais)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
			'v0.7.1-beta': [
				{
					title: 'Documents utilisateur',
					link: '/',
				},
				{
					title: 'Référence de l\'API Web',
					link: '/api/v1/',
				},
				{
					title: 'Guides pour développeurs',
					link: '/developer/',
				},
				{
					title: 'Communauté de support (Anglais)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
		},
		sidebar: {
			'v0.7.1-beta': {
				'/api/v1/': [
					{
						title: 'Information API',
						collapsible: true,
						children: [
							'/api/v1/',
							'/api/v1/introduction/setup.md',
							'/api/v1/introduction/config.md',
							'/api/v1/introduction/roles.md',
						],
					},
					{
						title: 'Points de terminaison',
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
						title: 'Avancé',
						collapsible: true,
						children: ['/api/v1/advanced/securing.md'],
					},
					{
						title: 'Outils',
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
						title: 'Commencer',
						collapsible: true,
						children: [
							'/developer/start/vs.md',
							'/developer/start/github.md',
							'/developer/start/compiling.md',
						],
					},
					{
						title: 'Dépots',
						collapsible: true,
						children: [
							'/developer/repository/',
							'/developer/repository/branches.md',
							'/developer/repository/file-structure.md',
							'/developer/repository/forking.md',
						],
					},
					{
						title: 'Faire des Changements',
						collapsible: true,
						children: [
							'/developer/modify/procedure.md',
							'/developer/modify/merging.md',
							'/developer/modify/conflicts.md',
						],
					},
					{
						title: 'Rester à Jour',
						collapsible: true,
						children: ['/developer/pullrequests/pulling.md'],
					},
					{
						title: 'Partager & Contribuer',
						collapsible: true,
						children: [
							'/developer/sharing/creating.md',
							'/developer/sharing/applying.md',
							'/developer/sharing/contributing.md',
						],
					},
					{
						title: 'Avancé',
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
						title: 'Informations Projet',
						collapsible: true,
						children: ['/', '/project/about.md'],
					},
					{
						title: 'Commencer',
						collapsible: true,
						children: [
							'/start/download.md',
							'/start/setup.md',
							'/start/login.md',
							'/start/overview.md',
						],
					},
					{
						title: 'Editeurs',
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
						title: 'Evènement',
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
						title: 'Configuration',
						collapsible: true,
						children: [
							'/configuration/client-editor.md',
							'/configuration/server.md',
							'/configuration/server-database.md',
							'/configuration/server-security.md',
							'/configuration/equipment.md',
							{
								title: 'Avancé',
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
						title: 'Déploiement du Jeu',
						collapsible: true,
						children: [
							'/deploy/forwarding.md',
							'/deploy/distributing.md',
							'/deploy/updater.md',
						],
					},
					{
						title: 'Mise à jour',
						collapsible: true,
						children: ['/upgrade/upgrading.md'],
					},
				],
			},
			'/api/v1/': [
				{
					title: 'Information API',
					collapsible: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
						'/api/v1/introduction/roles.md',
					],
				},
				{
					title: 'Points de terminaison',
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
					title: 'Avancé',
					collapsible: true,
					children: ['/api/v1/advanced/securing.md'],
				},
				{
					title: 'Outils',
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
					title: 'Commencer',
					collapsible: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: 'Dépots',
					collapsible: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Faire des Changements',
					collapsible: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Rester à Jour',
					collapsible: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Partager & Contribuer',
					collapsible: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avancé',
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
					title: 'Informations Projet',
					collapsible: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Commencer',
					collapsible: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editeurs',
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
					title: 'Evènement',
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
					title: 'Configuration',
					collapsible: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avancé',
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
					title: 'Déploiement du Jeu',
					collapsible: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/distributing.md',
						'/deploy/updater.md',
					],
				},
				{
					title: 'Mise à jour',
					collapsible: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
	it: {
		disabled: true,
		title: 'Documentazione di Intersect',
		description: '<<todo:it>>The free, open-source, modern 2d mmorpg maker.',
		components: {
			HashGenerator: {
				digestPlaceholder:
					'This will update with the hash once input is provided',
				inputPlaceholder:
					'Input text to be hashed (this is treated like a password!)',
			},
			VersionPicker: { Latest: 'Latest' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'On this page',
			More: 'More',
		},
		navbar: {
			latest: [
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
			],
			'v0.7.1-beta': [
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
			],
		},
		sidebar: {
			'v0.7.1-beta': {
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
			},
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
		},
	},
	nl: {
		disabled: true,
		title: 'Intersect Documentatie',
		description: 'De gratis, open-source, moderne 2d mmorpg maker.',
		components: {
			HashGenerator: {
				digestPlaceholder:
					'This will update with the hash once input is provided',
				inputPlaceholder:
					'Input text to be hashed (this is treated like a password!)',
			},
			VersionPicker: { Latest: 'Latest' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'On this page',
			More: 'More',
		},
		navbar: {
			latest: [
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
			],
			'v0.7.1-beta': [
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
			],
		},
		sidebar: {
			'v0.7.1-beta': {
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
			},
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
		},
	},
	'pt-BR': {
		title: 'Documentação do Intersect',
		description: 'O criador de mmorpg 2d moderno, open-source, gratuito',
		components: {
			HashGenerator: {
				digestPlaceholder:
					'This will update with the hash once input is provided',
				inputPlaceholder:
					'Input text to be hashed (this is treated like a password!)',
			},
			VersionPicker: { Latest: 'Latest' },
		},
		general: {
			EditThisPage: 'Edit this page',
			JoinOurCommunity: 'Join our Discord',
			OnThisPage: 'On this page',
			More: 'More',
		},
		navbar: {
			latest: [
				{
					title: 'Documentos do usuário',
					link: '/',
				},
				{
					title: 'Referência API',
					link: '/api/v1/',
				},
				{
					title: 'Guias do desenvolvedor',
					link: '/developer/',
				},
				{
					title: 'Comunidade de Apoio (Inglês)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
			'v0.7.1-beta': [
				{
					title: 'Documentos do usuário',
					link: '/',
				},
				{
					title: 'Referência API',
					link: '/api/v1/',
				},
				{
					title: 'Guias do desenvolvedor',
					link: '/developer/',
				},
				{
					title: 'Comunidade de Apoio (Inglês)',
					link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/',
				},
			],
		},
		sidebar: {
			'v0.7.1-beta': {
				'/api/v1/': [
					{
						title: 'Informação API',
						collapsible: true,
						children: [
							'/api/v1/',
							'/api/v1/introduction/setup.md',
							'/api/v1/introduction/config.md',
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
						title: 'Avançado',
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
						title: '<<todo:pt-BR>>Introduction',
						collapsible: true,
						children: ['/developer/'],
					},
					{
						title: 'Começando',
						collapsible: true,
						children: [
							'/developer/start/vs.md',
							'/developer/start/github.md',
							'/developer/start/compiling.md',
						],
					},
					{
						title: '<<todo:pt-BR>>Repository',
						collapsible: true,
						children: [
							'/developer/repository/',
							'/developer/repository/branches.md',
							'/developer/repository/file-structure.md',
							'/developer/repository/forking.md',
						],
					},
					{
						title: 'Fazendo mudanças',
						collapsible: true,
						children: [
							'/developer/modify/procedure.md',
							'/developer/modify/merging.md',
							'/developer/modify/conflicts.md',
						],
					},
					{
						title: 'Mantendo-se atualizado',
						collapsible: true,
						children: ['/developer/pullrequests/pulling.md'],
					},
					{
						title: 'Compartilhamento e contribuições',
						collapsible: true,
						children: [
							'/developer/sharing/creating.md',
							'/developer/sharing/applying.md',
							'/developer/sharing/contributing.md',
						],
					},
					{
						title: 'Avançado',
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
						title: 'Informações do Projeto',
						collapsible: true,
						children: ['/', '/project/about.md'],
					},
					{
						title: 'Começando',
						collapsible: true,
						children: [
							'/start/download.md',
							'/start/setup.md',
							'/start/login.md',
							'/start/overview.md',
						],
					},
					{
						title: 'Editores',
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
						title: 'Eventos',
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
						title: 'Configuração',
						collapsible: true,
						children: [
							'/configuration/client-editor.md',
							'/configuration/server.md',
							'/configuration/server-database.md',
							'/configuration/server-security.md',
							'/configuration/equipment.md',
							{
								title: 'Avançado',
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
						title: 'Distribuição',
						collapsible: true,
						children: [
							'/deploy/forwarding.md',
							'/deploy/distributing.md',
							'/deploy/updater.md',
						],
					},
					{
						title: 'Atualizando',
						collapsible: true,
						children: ['/upgrade/upgrading.md'],
					},
				],
			},
			'/api/v1/': [
				{
					title: 'Informação API',
					collapsible: true,
					children: [
						'/api/v1/',
						'/api/v1/introduction/setup.md',
						'/api/v1/introduction/config.md',
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
					title: 'Avançado',
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
					title: '<<todo:pt-BR>>Introduction',
					collapsible: true,
					children: ['/developer/'],
				},
				{
					title: 'Começando',
					collapsible: true,
					children: [
						'/developer/start/vs.md',
						'/developer/start/github.md',
						'/developer/start/compiling.md',
					],
				},
				{
					title: '<<todo:pt-BR>>Repository',
					collapsible: true,
					children: [
						'/developer/repository/',
						'/developer/repository/branches.md',
						'/developer/repository/file-structure.md',
						'/developer/repository/forking.md',
					],
				},
				{
					title: 'Fazendo mudanças',
					collapsible: true,
					children: [
						'/developer/modify/procedure.md',
						'/developer/modify/merging.md',
						'/developer/modify/conflicts.md',
					],
				},
				{
					title: 'Mantendo-se atualizado',
					collapsible: true,
					children: ['/developer/pullrequests/pulling.md'],
				},
				{
					title: 'Compartilhamento e contribuições',
					collapsible: true,
					children: [
						'/developer/sharing/creating.md',
						'/developer/sharing/applying.md',
						'/developer/sharing/contributing.md',
					],
				},
				{
					title: 'Avançado',
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
					title: 'Informações do Projeto',
					collapsible: true,
					children: ['/', '/project/about.md'],
				},
				{
					title: 'Começando',
					collapsible: true,
					children: [
						'/start/download.md',
						'/start/setup.md',
						'/start/login.md',
						'/start/overview.md',
					],
				},
				{
					title: 'Editores',
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
					title: 'Eventos',
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
					title: 'Configuração',
					collapsible: true,
					children: [
						'/configuration/client-editor.md',
						'/configuration/server.md',
						'/configuration/server-database.md',
						'/configuration/server-security.md',
						'/configuration/equipment.md',
						{
							title: 'Avançado',
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
					title: 'Distribuição',
					collapsible: true,
					children: [
						'/deploy/forwarding.md',
						'/deploy/distributing.md',
						'/deploy/updater.md',
					],
				},
				{
					title: 'Atualizando',
					collapsible: true,
					children: ['/upgrade/upgrading.md'],
				},
			],
		},
	},
};
