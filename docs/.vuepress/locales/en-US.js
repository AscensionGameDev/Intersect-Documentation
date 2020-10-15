module.exports = {
    code: 'en-US',
    locale: {
        lang: 'en-US',
        title: 'Intersect Documentation',
        description: 'The free, open-source, modern 2d mmorpg maker.'
    },
    themeConfig: {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Help us improve this page.',
        nav: [
            {
                text: 'User Docs',
                link: '/',
            },
            {
                text: 'API Reference',
                link: '/api/v1/',
            },
            {
                text: 'Developer Guides',
                link: '/developer/',
            },
            {
                text: 'Support Community',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: 'API Information',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
                },
                {
                    title: 'Endpoints',
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
                    title: 'Advanced',
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
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/developer/start/vs.md',
                        '/developer/start/github.md',
                        '/developer/start/compiling.md'
                    ]
                },
                {
                    title: 'Repository',
                    collapsable: true,
                    children: [
                        '/developer/repository/',
                        '/developer/repository/branches.md',
                        '/developer/repository/file-structure.md',
                        '/developer/repository/forking.md'
                    ]
                },
                {
                    title: 'Making Changes',
                    collapsable: true,
                    children: [
                        '/developer/modify/procedure.md',
                        '/developer/modify/merging.md',
                        '/developer/modify/conflicts.md',
                    ]
                },
                {
                    title: 'Staying up to Date',
                    collapsable: true,
                    children: [
                        '/developer/pullrequests/pulling.md',
                    ]
                },
                {
                    title: 'Sharing & Contributions',
                    collapsable: true,
                    children: [
                        '/developer/sharing/creating.md',
                        '/developer/sharing/applying.md',
                        '/developer/sharing/contributing.md',
                    ]
                },
                {
                    title: 'Advanced',
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
                    title: 'Project Information',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/login.md',
                        '/start/overview.md',
                    ]
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
                    ]
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
                            ]
                        }
                    ]
                },
                {
                    title: 'Deployment',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: 'Upgrading',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    }
};
