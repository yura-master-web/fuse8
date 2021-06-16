import gulp from 'gulp'

import {
    styles,
    prettierCss /* , buildTailwind, buildBootstrap */,
} from './styles'
import {icons} from './icons'
import {copy} from './copy'
import {templates, templatesLint} from './templates'
import {server} from './server'
import {watch} from './watch'
// import {scripts, scriptsWatch} from './scripts'
// import {sprites} from './sprites';

gulp.task(
    'default',
    gulp.series(
        copy,
        styles,
        icons,
        // buildTailwind,
        // buildBootstrap,
        templates,
        templatesLint,
        gulp.parallel(server, watch),
    ),
)

gulp.task('templates', gulp.series(styles, icons, templates))

gulp.task('build-vue', gulp.series(prettierCss))

// gulp.task(
//     'build',
//     gulp.series(
//         templates,
//         copy,
//         scripts,
//         gulp.parallel(icons /* styles, buildTailwind, buildBootstrap*/),
//     ),
// )

// gulp.task('stylesLint', stylesLint);
// gulp.task('scriptsWatch', scriptsWatch)
// gulp.task('templatesLint', templatesLint)
