
var gulp = require('gulp'),
	header = require('gulp-header');
	pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * @Copyright (C) 2014 <%= pkg.author %>',

  ' */',
  ''].join('\n');


gulp.task('scripts', function(){
	gulp.src('js/src/**/*.js')
	.pipe(header(banner, {
		pkg: pkg }))
	.pipe(gulp.dest('js'));

});

gulp.task('default', function(){
	var watcher = gulp.watch('js/src/**/*.js', ['scripts']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' +
		event.type + ', running tasks...');
	});
});

