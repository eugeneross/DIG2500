import gulp   from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('lint', () => {

  // Check our javascript files
  
  return gulp.src([config.lint.scripts, config.lint.gulp])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});
