var gulp = require('gulp');

// Run this to compress all the things! removed ['karma'] for now
gulp.task('production', function(){
  // This runs only if the karma tests pass
  gulp.start(['jade', 'images', 'pubfiles', 'minifyCss', 'uglifyJs'])
});
