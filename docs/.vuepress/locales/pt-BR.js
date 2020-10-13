module.exports = {
    code: 'pt-BR',
    locale: {
        lang: 'pt-BR',
        title: '<<todo:pt-BR>>Intersect Documentation',
        description: '<<todo:pt-BR>>The free, open-source, modern 2d mmorpg maker.'
    },
    themeConfig: {
        selectText: '<<todo:pt-BR>>Languages',
        label: 'Portugûes (BR)',
        ariaLabel: '<<todo:pt-BR>>Languages',
        editLinkText: '<<todo:pt-BR>>Help us improve this page.',
        nav: [
            {
                text: '<<todo:pt-BR>>User Docs',
                link: '/',
            },
            {
                text: '<<todo:pt-BR>>API Reference',
                link: '/api/v1/',
            },
            {
                text: '<<todo:pt-BR>>Developer Guides',
                link: '/dev/',
            },
            {
                text: '<<todo:pt-BR>>Support Community',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: '<<todo:pt-BR>>API Information',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Endpoints',
                    collapsable: true,
                    children: [
                        '/api/v1/endpoints/authentication.md',
                        '/api/v1/endpoints/admin.md',
                        '/api/v1/endpoints/chat.md',
                        '/api/v1/endpoints/info.md',
                        '/api/v1/endpoints/gameobjects.md',
                        '/api/v1/endpoints/users.md',
                        '/api/v1/endpoints/players.md',
                        '/api/v1/endpoints/variables.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Advanced',
                    collapsable: true,
                    children: [
                        '/api/v1/advanced/securing.md',
                    ]
                },
            ],
            '/dev/': [
                {
                    title: '<<todo:pt-BR>>Developer Information',
                    collapsable: true,
                    children: [
                        '/dev/',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Getting Started',
                    collapsable: true,
                    children: [
                        '/dev/start/vs.md',
                        '/dev/start/github.md',
                        '/dev/start/compiling.md',
                        '/dev/start/layout.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Making Changes',
                    collapsable: true,
                    children: [
                        '/dev/modify/procedure.md',
                        '/dev/modify/merging.md',
                        '/dev/modify/conflicts.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Staying up to Date',
                    collapsable: true,
                    children: [
                        '/dev/pullrequests/pulling.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Sharing & Contributions',
                    collapsable: true,
                    children: [
                        '/dev/sharing/creating.md',
                        '/dev/sharing/applying.md',
                        '/dev/sharing/contributing.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Advanced',
                    collapsable: true,
                    children: [
                        '/dev/advanced/database.md',
                        '/dev/advanced/packets.md',
                        '/dev/advanced/eventcommands.md',
                    ]
                },
            ],
            '/': [
                {
                    title: '<<todo:pt-BR>>Project Information',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Getting Started',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/login.md',
                        '/start/overview.md',
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Editors',
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
                    title: '<<todo:pt-BR>>Events',
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
                    title: '<<todo:pt-BR>>Configuration',
                    collapsable: true,
                    children: [
                        '/configuration/client-editor.md',
                        '/configuration/server.md',
                        '/configuration/server-database.md',
                        '/configuration/server-security.md',
                        '/configuration/equipment.md',
                        {
                            title: '<<todo:pt-BR>>Advanced',
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
                    title: '<<todo:pt-BR>>Deployment',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: '<<todo:pt-BR>>Upgrading',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    }
};
