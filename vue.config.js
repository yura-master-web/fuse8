const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    lintOnSave: 'warning',

    publicPath: '/',

    configureWebpack: {
        plugins: [
            new CopyPlugin({
                patterns: [{from: 'src/assets/images', to: 'images'}],
            }),
        ],
    },

    css: {
        loaderOptions: {
            stylus: {
                import: [
                    // подключаем какие либо переменные
                    path.resolve(__dirname, 'front/styles/helpers/functions.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/variables.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/grid-sizes.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/mixins.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/typography.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/utilities-media-functions.styl'),
                    // path.resolve(__dirname, 'src/assets/style/total.styl'),
                ],
            },
        },
    },
}
