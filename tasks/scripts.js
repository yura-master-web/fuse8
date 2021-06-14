import gulp from 'gulp'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import makeWebpackConfig from '../webpack.conf.js'

const {NODE_ENV} = process.env

const isDebug = NODE_ENV !== 'production'
const isWatch = process.env.WEBPACK_WATCH === 'true'

function runWebpack(watch = false) {
    return gulpWebpack(
        makeWebpackConfig({
            debug: isDebug,
            eslint: watch,
            watch: isWatch,
        }),
        webpack,
    )
}

export const scripts = () =>
    gulp
        .src('front/scripts/app.js')
        .pipe(runWebpack())
        .pipe(gulp.dest('src/assets/js'))

export const scriptsWatch = () =>
    gulp
        .src('front/scripts/app.js')
        .pipe(runWebpack(true))
        .pipe(gulp.dest('src/assets/js'))
