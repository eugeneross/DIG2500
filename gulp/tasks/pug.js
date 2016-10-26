import gulp        from 'gulp';
import pug         from 'gulp-pug';
import rename      from 'gulp-rename';
import config      from '../config';
import browserSync from 'browser-sync';

// Convert our pug files to html files

gulp.task('pug', function buildHTML() {

  //const reload = browserSync.reload;

  return gulp.src(config.src.views)
  .pipe(pug({
    pretty: true
  }))


  .pipe(gulp.dest(config.dest.dir))
  .pipe(browserSync.stream());


});
