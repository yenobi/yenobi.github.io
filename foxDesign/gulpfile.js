'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('build');
});

// сборка проекта
gulp.task('build', gulp.series('clean', 'sass'));

// вотчер
gulp.task('watch', function() {
  gulp.watch('css/*.scss', gulp.series('sass'));
});

// девелоперская задача - сначала собирает проект,
// потом вотчера ставит сразу
gulp.task('dev', gulp.series('build', 'watch'));
