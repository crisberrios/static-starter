var gulp = require('gulp');
var config = require('../config').jade;
var browserSync  = require('browser-sync');
var jade = require('gulp-jade');

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  return gulp.src(config.src)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
