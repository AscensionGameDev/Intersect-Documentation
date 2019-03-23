module.exports = {
    base: '/',
    title: 'Intersect Engine',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: 'UA-87324178-1',
    themeConfig: {
        repo: 'jcsnider/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        repoLabel: '',
        editLinkText: 'Help us improve this page.',
        editLinks: true,
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
            ],
        },
    },
};
