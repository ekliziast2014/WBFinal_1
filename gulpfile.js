var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn"),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

// Запуск локального сервера
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        port:555
    });
    opn('http://localhost:555');
});

// Работа с HTML
gulp.task('html', function () {
    gulp.src('app/*.html')
        .pipe(connect.reload());
});
// CSS
gulp.task('css', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
});
// JS
gulp.task('js', function () {
    gulp.src('app/js/**/*.js')
        .pipe(connect.reload());
});

// Слежка
gulp.task('watch', function () {
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(['app/css/**/*.css'], ['css']);
    gulp.watch(['app/js/**/*.js'], ['js']);
});

// Задача по-умолчанию
gulp.task('default', ['connect', 'watch']);