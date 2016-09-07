var gulp = require('gulp');
var merge = require('merge-stream');
var config = require('../config').copy;
var util = require('gulp-util');

gulp.task('copy',function(){
    var list = [];
    for(var key in config){
        var _config = config[key];
        list.push(gulp.src(_config.src).pipe(gulp.dest(_config.dest)));
    }
    return merge.apply(null,list);
})
