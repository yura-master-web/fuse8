const path = require('path')

module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    lintOnSave: 'warning',

    css: {
        loaderOptions: {
            stylus: {
                import: [
                    // подключаем какие либо переменные
                    path.resolve(__dirname, 'front/styles/helpers/functions.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/variables.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/mixins.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/typography.styl'),
                    path.resolve(__dirname, 'front/styles/helpers/utilities-media-functions.styl'),
                    // path.resolve(__dirname, 'src/assets/style/total.styl'),
                ],
            },
        },
    },
}
