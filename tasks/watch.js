import gulp from 'gulp'
// import runSequence from 'run-sequence';
import {get as browserSync} from 'browser-sync'
import {styles /* , buildTailwind, buildBootstrap */} from './styles'
import {copy} from './copy'
import {templates, templatesLint} from './templates'
import {scriptsWatch} from './scripts'
import {icons} from './icons'

const bs = browserSync('server')
const reload = done => {
    bs.reload()
    done()
}

export const watch = () => {
    global.watch = true

    gulp.watch('front/resources/**/*', gulp.series(copy, reload))
    gulp.watch('front/{styles,blocks}/**/*.styl', gulp.series(styles))
    // gulp.watch('front/{styles,blocks}/**/*.css', gulp.series(buildTailwind))
    // gulp.watch('front/{styles,blocks}/**/*.scss', gulp.series(buildBootstrap))

    gulp.watch('front/icons/**/*.svg', gulp.series(icons, reload))

    gulp.watch(
        ['front/{pages,blocks}/**/*.pug'],
        gulp.series(templates, templatesLint),
    )

    gulp.watch('front/**/*.{js,vue}', scriptsWatch)
}
