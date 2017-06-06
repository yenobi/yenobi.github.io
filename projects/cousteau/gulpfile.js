'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const imagemin     = require('gulp-imagemin'); 
const pngquant     = require('imagemin-pngquant'); 
const cache = require('gulp-cache'); 
const rename = require('gulp-rename');

//need two tasks - minify css and minify img 

gulp.task('css-min', function() {
  return gulp.src('css/style.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});

gulp.task('img-min', function() {
	return gulp.src('src-img/**/*') 
		.pipe(cache(imagemin({  
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('img'));
});