import gulp        from 'gulp';
import config      from '../config';
import browserSync from 'browser-sync';

gulp.task('watch', (cb) => {

  const reload = browserSync.reload;

  gulp.watch(config.src.styles, ['styles']).on('change', reload);
  gulp.watch(config.src.js, ['scripts']).on('change', reload);
  gulp.watch(config.src.views, ['pug']).on('change', reload);

cb();

});
