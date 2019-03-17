module.exports = {
    base: '/',
    title: 'Intersect',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: 'UA-87324178-1',
    themeConfig: {
        repo: 'jcsnider/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        repoLabel: 'Contribute',
        editLinkText: 'Help us improve this page.',
        editLinks: true,
        nav: [
            {
                text: 'Get Started',
                link: '/',
            },
            {
                text: 'API Ref',
                link: '/api',
            },
            {
                text: 'Community Guides',
                link: 'https://www.ascensiongamedev.com/forum/56-guides-and-tutorials/',
            },
            {
                text: 'Get Help',
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
