import gulp        from 'gulp';
import config      from '../config';
import uglify      from 'gulp-uglify';
import browserSync from 'browser-sync';
import pump        from 'pump';
import concat      from 'gulp-concat';
//import harmony     from 'uglify-js-harmony';

function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

gulp.task('scripts', () => {

    gulp.src(config.src.js)
      //.pipe(uglify()
      //.on('error', errorLog)
      //.pipe(concat('main.js'))
      .pipe(gulp.dest(config.dest.js))
      .pipe(browserSync.reload({stream: true}));

});
