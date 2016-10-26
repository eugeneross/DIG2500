import gulp        from 'gulp';
import config      from '../config';
import uglify      from 'gulp-uglify';
import pump        from 'pump';

gulp.task('scripts', (cb) => {
  pump([
    gulp.src(config.src.js),
    uglify(),
    gulp.dest(config.dest.js)
  ], cb );
});
