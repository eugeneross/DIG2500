import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browserSync', () =>  {

// New browserSync initiation

//  browserSync.use(require('htmlInjector'), {
  //  files: ['*.html']
  //});

  const reload = browserSync.reload;

     browserSync.init({
          server: {
                baseDir: config.dest.dir,
                injectChanges: true
          }
     });

      //gulp.watch(config.src.styles).on('change', reload);
});
