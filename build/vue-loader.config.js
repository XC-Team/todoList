const docsLoader = require('./doc-loader')

module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        //hotReload: false根据环境生成
        loaders: {
            'docs': docsLoader
        }
    }
}