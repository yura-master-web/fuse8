import gulp from 'gulp'
import changed from 'gulp-changed'
import filter from 'gulp-filter'
import gulpIf from 'gulp-if'

const {INCLUDE_ROBOTS} = process.env

export const copy = () =>
    gulp
        .src('front/resources/**/*')
        .pipe(changed('src/assets'))
        .pipe(
            gulpIf(
                !INCLUDE_ROBOTS,
                filter(file => !/resources[\\/]robots\.txt/.test(file.path)),
            ),
        )
        .pipe(gulp.dest('src/assets'))
