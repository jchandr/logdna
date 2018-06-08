var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');

gulp.task('styles', function () {
    return gulp.src('./styles.scss')
        .pipe(wait(250))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['styles'], function() {
    gulp.watch('./*.scss', ['styles']);
});
