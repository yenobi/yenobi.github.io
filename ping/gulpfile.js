'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// need to test plugins for img
const imagemin     = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
const pngquant     = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
const cache = require('gulp-cache'); // Подключаем библиотеку кеширования
const rename = require('gulp-rename');

gulp.task('less', function() {
  return gulp.src('src/css/style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**.js')
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('img', function() {
	return gulp.src('img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('build/img')); // Выгружаем на продакшен
});

gulp.task('clean', function() {
  return del('build');
});
// вотчер (пока только для стилей)
gulp.task('watch', function() {
  gulp.watch('src/css/*.less', gulp.series('less'));
});

// smth wrong with this task
gulp.task('build', gulp.series('clean', 'less', 'js', 'img'));
// дев-задача - сборка + вотчер сразу
gulp.task('dev', gulp.series('build', 'watch'));
