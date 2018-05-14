'use strict';
var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	postcss 	= require('gulp-postcss'),
	minify 		= require('gulp-minify'),
	autoprefix 	= require('autoprefixer');

var dir = './dist/',
	source = './scss/',
	sourceJs = './js/',
	dirJs = './dist/';


/**
 * Generate new style from 'source' dir
 */
gulp.task('css', function () {
	gulp.src(source + 'cookiesbar.scss')
		.pipe(sass({
			outputStyle: 'compressed', // expanded compressed compact nested
		}).on('error', sass.logError))
		.pipe(postcss([
			autoprefix({
				browsers: ['> 5%', 'last 2 version', 'IE 9']
			})
		]))
		.pipe(gulp.dest(dir));
});


/**
 * Generate new style from 'source' dir
 */
gulp.task('js', function () {
	gulp.src(sourceJs + '*.js')
		.pipe(minify({
			ext:{
				src:'.js', // Full version
				min:'.min.js' // Minify version
			},
			exclude: [],
			ignoreFiles: []
		}))
		.pipe(gulp.dest(dirJs));
});


/**
 * Watch files
 */
gulp.task('watch', ['css', 'js'], function () {
	gulp.watch(source + '**/*', ['css']);
	gulp.watch(sourceJs + '**/*', ['js']);
});