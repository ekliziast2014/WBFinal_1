var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// Запуск локального сервера
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        port:555
    });
    opn('http://localhost:555');
});

// Компиляция SCSS в CSS
gulp.task('sass', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/vendor'));
});

// Конкатенация CSS в один файл main.css
gulp.task('concat', function () {
    gulp.src('app/css/vendor/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'));
});

// Работа с HTML
gulp.task('html', function () {
    gulp.src('app/*.html')
        .pipe(connect.reload());
});


// Работа с CSS
gulp.task('css', function () {
    gulp.src('app/css/**/*.css')
        .pipe(connect.reload());
});

// Работа с JS
gulp.task('js', function () {
    gulp.src('app/js/**/*.js')
        .pipe(connect.reload());
});

// Слежка
gulp.task('watch', function () {
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(['app/css/**/*.css'], ['css']);
    gulp.watch(['app/scss/**/*.scss'], ['sass']);
    gulp.watch(['app/js/**/*.js'], ['js']);
});

// Задача по-умолчанию
gulp.task('default', ['sass','concat','connect', 'watch']);
// Полная проверка добавить такие таски -  ,'connect', 'watch'