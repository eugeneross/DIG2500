import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], (cb) => {

  cb = cb || function() {};

  global.isProd = true;

  runSequence(['scripts', 'styles', 'pug'], cb);

});
