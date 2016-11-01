import gulp        from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

// Run the clean task on each build

gulp.task('dev', ['clean'], (cb) => {

  cb = cb || function() {};

  global.isProd = false;


  // Run our tasks in these sequences
  return runSequence(['scripts', 'styles', 'pug', 'copy', 'browserSync'], 'watch', cb);

});
