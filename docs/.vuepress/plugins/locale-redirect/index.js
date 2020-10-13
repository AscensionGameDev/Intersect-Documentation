const path = require('path')
const stringify = require('@shigma/stringify-object')

const RedirectPlugin = (options) => ({
    name: 'vuepress-plugin-redirect',

    // workaround SSR mismatch in 404.html
    plugins: ['dehydrate'],

    enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),

    additionalPages: [
        {
            path: '/',
            filePath: path.resolve(__dirname, '..', '..', '..', 'en-US', 'README.md')
        }
    ],

    clientDynamicModules() {
        return {
            name: 'plugin-redirect-options.js',
            content: `export default ${stringify(options)}`,
        }
    },
})

module.exports = RedirectPlugin
