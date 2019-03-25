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
                link: '/api',
            },
            {
                text: 'Developer Guides',
                link: '/dev',
            },
            {
                text: 'Support Community',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Project Information',
                    collapsable: false,
                    children: [
                        '/project/introduction.md',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/editor.md',
                    ]
                },
            ],
        },
    },
};
