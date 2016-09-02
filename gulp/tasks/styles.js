var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var config = require('../config.js').sass;
var plumber = require('gulp-plumber');

gulp.task('styles', function() {
  gulp.src(config.src)
      .pipe(plumber())
      .pipe(sass(config.settings))
      .pipe(gulp.dest(config.dest))
      .pipe(connect.reload());
});
