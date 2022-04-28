const { locales, themeConfig } = require('./localizer');

module.exports = {
    base: '/',
    title: 'Intersect Documentation',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: '',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: '/assets/intersect-logo@192.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/intersect-logo.svg', color: '#ffffff' }],
        ['link', { rel: 'manifest', href: '/assets/manifest.json' }],
        ['link', { rel: 'shortcut icon', href: '/assets/intersect-logo.ico' }],
        ['meta', { name: 'msapplication-config', content: '/assets/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@16.png', sizes: '16x16' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@24.png', sizes: '24x24' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@48.png', sizes: '48x48' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@64.png', sizes: '64x64' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@96.png', sizes: '96x96' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@128.png', sizes: '128x128' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@192.png', sizes: '192x192' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/assets/intersect-logo@256.png', sizes: '256x256' }],
    ],
    locales,
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        [
            require('./plugins/locale-redirect'),
            {
                locales: true
            }
        ]
    ],
    postcss: {
        plugins: [
            require('autoprefixer')
        ]
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        defaultTheme: 'dark',
        repo: 'AscensionGameDev/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        logo: '/assets/intersect-logo.svg',
        smoothScroll: true,

        locales: themeConfig.locales
    },
};
