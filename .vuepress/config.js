module.exports = {
    base: '/',
    title: 'Intersect Documentation',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: '',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#0e4688' }],
        ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
        ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],
    themeConfig: {
        repo: 'jcsnider/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        editLinkText: 'Help us improve this page.',
        editLinks: true,
        logo: 'https://www.ascensiongamedev.com/resources/filehost/e37ded2fa492ae07375cd18bd1d8312c.png',
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
                link: '/dev/',
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
            '/dev/': [
                {
                    title: 'Developer Information',
                    collapsable: true,
                    children: [
                        '/dev/',
                    ]
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/dev/start/vs.md',
                        '/dev/start/github.md',
                        '/dev/start/compiling.md',
                    ]
                },
                {
                    title: 'Modifications',
                    collapsable: true,
                    children: [
                        '/dev/modify/branching.md',
                        '/dev/modify/committing.md',
                        '/dev/modify/pushing.md',
                    ]
                },
                {
                    title: 'Contributing',
                    collapsable: true,
                    children: [
                        '/dev/contribute/style.md',
                        '/dev/contribute/pullrequests.md',
                    ]
                },
                {
                    title: 'Advanced',
                    collapsable: true,
                    children: [
                        '/dev/advanced/migrations.md',
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
                    title: 'Intersect Editors',
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
                    title: 'Advanced Configuration',
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
                },
                {
                    title: 'Deployment',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
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
    },
};
