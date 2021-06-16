import gulp from 'gulp'
import plumber from 'gulp-plumber'
import gulpIf from 'gulp-if'
import rupture from 'rupture'
import stylus from 'gulp-stylus'
// import importIfExist from 'stylus-import-if-exist'
// import autoprefixer from 'autoprefixer-stylus'
import gcmq from 'gulp-group-css-media-queries'
import nano from 'gulp-cssnano'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import errorHandler from 'gulp-plumber-error-handler'

import {setup} from 'emitty'
const emittyStyl = setup('front', 'stylus')

global.emittyChangedFile = {
    path: '',
    stats: null,
}

const isDebug = process.env.NODE_ENV !== 'production'
const isWatch = process.env.WEBPACK_WATCH === 'true'

// prettier-ignore
export const styles = () =>
    gulp
        .src('front/styles/*.styl')
        .pipe(plumber({errorHandler: errorHandler('Error in "styles" task')}))
        .pipe(gulpIf(isWatch, emittyStyl.stream(global.emittyChangedFile.path, global.emittyChangedFile.stats)))
        .pipe(gulpIf(isDebug, sourcemaps.init()))
        .pipe(
            stylus({
                use: [rupture()],
                'include css': true,
                define: {
                    // dev-mode variable for using in stylus
                    __DEV__: isDebug
                }
            })
        )
        .pipe(gulpIf(!isDebug, gcmq()))
        .pipe(gulpIf(!isDebug, nano({zindex: false, minifyFontValues: false, discardUnused: false})))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpIf(isDebug, sourcemaps.write()))
        .pipe(gulp.dest('src/assets/css'))

const purgecss = require('gulp-purgecss')
export const prettierCss = () =>
    gulp
        .src('dist/css/*.css')
        .pipe(gcmq())
        .pipe(
            purgecss({
                content: ['dist/*.html', 'dist/js/*.js'],
                css: ['*:focus', '*:active', '*:hover'],
            }),
        )
        .pipe(
            nano({
                zindex: false,
                minifyFontValues: false,
                discardUnused: false,
            }),
        )
        .pipe(gulp.dest('dist/css'))

// const postcss = require('gulp-postcss')
// // prettier-ignore
// export const buildTailwind = () =>
//     gulp
//         .src('app/styles/tailwind.css')
//         .pipe(
//             postcss([
//                 require('postcss-import'),
//                 require('tailwindcss'),
//                 require('postcss-preset-env')({
//                     stage: 1,
//                     features: {
//                         'focus-within-pseudo-class': false,
//                     },
//                 }),
//             ]),
//         )
//         .pipe(gulpIf(!isDebug, gcmq()))
//         .pipe(gulpIf(!isDebug, nano({zindex: false, minifyFontValues: false, discardUnused: false})))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulpIf(isDebug, sourcemaps.write()))
//         .pipe(gulp.dest('dist/assets/styles'))

// const sass = require('gulp-sass')
// const purgecss = require('gulp-purgecss')

// export const buildBootstrap = () =>
//     gulp
//         .src('app/styles/bootstrap.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(
//             gulpIf(
//                 !isDebug,
//                 purgecss({
//                     content: ['dist/*.html', 'dist/assets/scripts/*.js'],
//                 }),
//             ),
//         )
//         .pipe(
//             gulpIf(
//                 !isDebug,
//                 nano({
//                     zindex: false,
//                     minifyFontValues: false,
//                     discardUnused: false,
//                 }),
//             ),
//         )
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulpIf(isDebug, sourcemaps.write()))
//         .pipe(gulp.dest('dist/assets/styles'))
