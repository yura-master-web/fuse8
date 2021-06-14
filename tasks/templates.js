import gulp from 'gulp'
import gulpIf from 'gulp-if'
import plumber from 'gulp-plumber'
import pug from 'gulp-pug'
import pugLinter from 'gulp-pug-linter'
import prettify from 'gulp-jsbeautifier'
import inheritance from 'gulp-pug-inheritance'
// import changed from 'gulp-changed'
// import cached from 'gulp-cached'
import filter from 'gulp-filter'
import rename from 'gulp-rename'
import errorHandler from 'gulp-plumber-error-handler'
import getData from 'jade-get-data'
import staticHash from 'gulp-static-hash'

const data = {
    getData: getData('app/data'),
    jv0: 'javascript:void(0);',
    // prettier-ignore
    // '"jv0"': 'javascript:void(0);',
    // dev-mode variable for using in jade
    __DEV__: process.env.NODE_ENV !== 'production',
}

export const templates = () =>
    gulp
        .src('front/**/*.pug')
        .pipe(
            plumber({
                // eslint-disable-next-line
                errorHandler: errorHandler(`Error in \'templates\' task`),
            }),
        )
        // .pipe(changed('src/assets', {extension: '.html'}))
        // .pipe(changed('src/assets', {extension: '.html'}))
        // .pipe(cached('pug'))
        .pipe(
            inheritance({
                basedir: 'front',
                extension: '.pug',
                skip: 'node_modules',
            }),
        )
        .pipe(filter(file => /front[\\/]pages/.test(file.path)))
        .pipe(pug({basedir: 'front', data}))
        .pipe(
            gulpIf(
                process.env.PRETTIFY !== 'false',
                prettify({
                    braceStyle: 'expand',
                    indentWithTabs: true,
                    indentInnerHtml: true,
                    preserveNewlines: true,
                    endWithNewline: true,
                    wrapLineLength: 120,
                    maxPreserveNewlines: 50,
                    wrapAttributesIndentSize: 1,
                    unformatted: ['use'],
                }),
            ),
        )
        .pipe(
            gulpIf(
                process.env.NODE_ENV === 'production',
                staticHash({
                    asset: 'src/assets',
                    exts: ['js', 'css'],
                }),
            ),
        )
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest('src/assets'))

export const templatesLint = () =>
    gulp
        .src('front/**/*.pug')
        .pipe(pugLinter())
        .pipe(pugLinter.reporter('fail'))
