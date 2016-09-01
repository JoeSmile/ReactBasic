var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').watch;

gulp.task('build', ['webpack','styles'], function() {
    gulp.src(config.src).pipe(connect.reload());
});
