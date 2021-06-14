// import path from 'path';
// import NpmInstallPlugin from 'npm-install-webpack-plugin';
import webpack from 'webpack'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

const scriptPath = './front/scripts/'
const scripts = {
    app: scriptPath + 'app',
}

export default function makeWebpackConfig({debug = false, eslint = false, watch = false}) {
    return {
        watch: watch ? watch : false,
        watchOptions: {
            aggregateTimeout: 200,
            poll: 100,
        },
        entry: {
            ...scripts,
        },
        output: {
            filename: '[name].min.js',
        },
        mode: debug ? 'development' : 'production',
        devtool: debug ? 'source-map' : 'none',
        resolve: {
            alias: {
                jquery: require.resolve('jquery'),
                // vue$: debug ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.min.js',
            },
            extensions: ['*', '.js', '.vue', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        // это применяется к `<template lang="pug">` в компонентах Vue
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader'],
                        },
                        // это применяется к импортам pug внутри JavaScript
                        {
                            use: ['raw-loader', 'pug-plain-loader'],
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    exclude: ['/node_modules/', '/jquery-lazy/', '/libs/'],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            ignore: ['node_modules/**/*'],
                            presets: [
                                [
                                    '@babel/preset-env',
                                    // {
                                    //     targets: {
                                    //         chrome: 80
                                    //     }
                                    // }
                                    {
                                        targets: {
                                            ie: 11,
                                        },
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                        modules: 'commonjs',
                                    },
                                ],
                            ],
                            plugins: ['@babel/plugin-proposal-class-properties'],
                            // plugins: [['@babel/plugin-proposal-class-properties'], ['@babel/plugin-proposal-decorators', {legacy: true}]]
                        },
                    },
                },
                {
                    test: require.resolve('jquery'),
                    use: [
                        {loader: 'expose-loader', options: 'jQuery'},
                        {loader: 'expose-loader', options: '$'},
                    ],
                },
                {
                    test: require.resolve('axios'),
                    use: [{loader: 'expose-loader', options: 'axios'}],
                },
                // prettier-ignore
                eslint ?
                    {
                        test: /\.js|vue$/,
                        exclude: /node_modules/,
                        loader: 'eslint-loader',
                        options: {
                            configFile: './.eslintrc.js',
                            formatter: require('eslint-friendly-formatter'),
                        },
                    } : {},
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'chunk-vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        chunks: 'initial',
                    },
                },
            },
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                },
                // eslint-disable-next-line object-shorthand
                dump: function () {
                    console.log(...arguments)
                },
            }),
        ],
    }
}
