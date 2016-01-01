
var gulp   = require('gulp'),
    debug  = require('gulp-debug'),
    util   = require('gulp-util'),
    jsdoc  = require('gulp-jsdoc-to-markdown'),
    rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp
        .src('src/index.js')
        //.pipe(debug());
        .pipe(jsdoc())
        .pipe(gulp.dest('docs'));
});