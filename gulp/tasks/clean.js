import gulp   from 'gulp';
import del    from 'del';
import config from '../config';

gulp.task('clean', () => {

  // Clean the insides of the './public' folder on every build

  return del([config.dest.dir + '/*']);

});
