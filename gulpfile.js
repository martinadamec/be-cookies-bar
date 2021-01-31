'use strict';
var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	postcss = require( 'gulp-postcss' ),
	minify = require( 'gulp-minify' ),
	autoprefix = require( 'autoprefixer' );

var dir = './dist/',
	source = './scss/',
	sourceJs = './js/',
	dirJs = './dist/';

/**
 * Generate new style from 'source' dir
 */
const css = () => {
	return gulp.src( source + 'cookiesbar.scss' )
		.pipe(sass({
			outputStyle: 'compressed', // expanded compressed compact nested
		}).on('error', sass.logError))
		.pipe( postcss( [
			autoprefix()
		] ) )
		.pipe( gulp.dest( dir ) );
};

/**
 * Generate new style from 'source' dir
 */
const js = () => {
	return gulp.src( sourceJs + '*.js' )
		.pipe( minify( {
			ext: {
				src: '.js', // Full version
				min: '.min.js' // Minify version
			},
			exclude: [],
			ignoreFiles: []
		} ) )
		.pipe( gulp.dest( dirJs ) );
};

/**
 * Watch files
 */
const watchTask = () => {
	gulp.watch( source + '**/*', [ 'css' ] );
	gulp.watch( sourceJs + '**/*', [ 'js' ] );
}

exports.css = css;
exports.js = js;
exports.default = gulp.parallel(css, js);
exports.watch = gulp.series(gulp.parallel(css, js), watchTask);
