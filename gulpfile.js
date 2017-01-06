'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const merge = require('merge-stream');
const path = require('path');

const destination = '';

gulp.task('html', function(cb) {
	if (!destination) {
		// Invoke the callback so gulp knows we're done.
		return cb();
	}
	var main = gulp.src(['**/*.html', '**/*.css', '**/*.js', '*.html'])
		.pipe(debug({title: 'HTML'}))
		.pipe(gulp.dest(destination));
	var demo = gulp.src(['demo/**/*.html', 'demo/**/*.css', 'demo/**/*.js'])
		.pipe(debug({title: 'HTML (demo)'}))
		.pipe(gulp.dest(path.join(destination, 'demo')));
	return merge(main, demo);
});

gulp.task('default', ['html']);
