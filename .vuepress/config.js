module.exports = {
    base: '/',
    title: 'Intersect Documentation',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: 'UA-87324178-1',
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
                    collapsable: false,
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
