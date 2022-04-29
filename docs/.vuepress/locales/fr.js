module.exports = {
    code: 'fr',
    locale: {
        lang: 'fr',
        title: 'Documentation Intersect',
        description: 'Le moteur moderne de création de mmorpg 2d, open source et gratuit.'
    },
    themeConfig: {
        selectText: 'Langues',
        label: 'Français',
        ariaLabel: 'Langues',
        editLinkText: 'Aidez-nous à améliorer cette page.',
        nav: [
            {
                text: 'Documents utilisateur',
                link: '/',
            },
            {
                text: 'Référence de l\'API Web',
                link: '/api/v1/',
            },
            {
                text: 'Guides pour développeurs',
                link: '/developer/',
            },
            {
                text: 'Communauté de support (Anglais)',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: 'Information API',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
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
                    ]
                },
                {
                    title: 'Avancé',
                    collapsable: true,
                    children: [
                        '/api/v1/advanced/securing.md',
                    ]
                },
            ],
            '/developer/': [
                {
                    title: 'Introduction',
                    collapsable: true,
                    children: [
                        '/developer/',
                    ]
                },
                {
                    title: 'Commencer',
                    collapsable: true,
                    children: [
                        '/developer/start/vs.md',
                        '/developer/start/github.md',
                        '/developer/start/compiling.md'
                    ]
                },
                {
                    title: 'Dépots',
                    collapsable: true,
                    children: [
                        '/developer/repository/',
                        '/developer/repository/branches.md',
                        '/developer/repository/file-structure.md',
                        '/developer/repository/forking.md'
                    ]
                },
                {
                    title: 'Faire des Changements',
                    collapsable: true,
                    children: [
                        '/developer/modify/procedure.md',
                        '/developer/modify/merging.md',
                        '/developer/modify/conflicts.md',
                    ]
                },
                {
                    title: 'Rester à Jour',
                    collapsable: true,
                    children: [
                        '/developer/pullrequests/pulling.md',
                    ]
                },
                {
                    title: 'Partager & Contribuer',
                    collapsable: true,
                    children: [
                        '/developer/sharing/creating.md',
                        '/developer/sharing/applying.md',
                        '/developer/sharing/contributing.md',
                    ]
                },
                {
                    title: 'Avancé',
                    collapsable: true,
                    children: [
                        '/developer/advanced/database.md',
                        '/developer/advanced/packets.md',
                        '/developer/advanced/eventcommands.md',
                    ]
                },
            ],
            '/': [
                {
                    title: 'Informations Projet',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Commencer',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/login.md',
                        '/start/overview.md',
                    ]
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
                    ]
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
                    ]
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
                            ]
                        }
                    ]
                },
                {
                    title: 'Déploiement du Jeu',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: 'Mise à jour',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    }
};
