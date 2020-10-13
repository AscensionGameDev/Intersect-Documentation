const path = require('path');
const { locales, themeConfig, availableLocaleCodes } = require('./localizer');

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
            require('css-prefers-color-scheme/postcss'),
            require('autoprefixer')
        ]
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        defaultTheme: 'dark',
        repo: 'AscensionGameDev/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        docsDir: '',
        docsBranch: 'master',
        editLinks: true,
        logo: 'https://www.ascensiongamedev.com/resources/filehost/e37ded2fa492ae07375cd18bd1d8312c.png',
        smoothScroll: true,

        locales: themeConfig.locales
    },
};
