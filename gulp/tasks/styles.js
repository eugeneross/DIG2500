import gulp         from 'gulp';
import sass         from 'gulp-sass';
import gulpif       from 'gulp-if';
import sourcemaps   from 'gulp-sourcemaps';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import uncss        from 'gulp-uncss';
import handleErrors from '../util/handle-errors';
import config       from '../config';

// SASS -> CSS

gulp.task('styles', () => {

  //const reload = browserSync.reload;

  return gulp.src(config.src.styles)
    .pipe(gulpif(!global.isProd, sourcemaps.init()))
    .pipe(sass({
      sourceComments: global.isProd ? false : 'map',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(!global.isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(config.dest.styles))
    //.pipe(uncss({
      //html: './public/**/*.html'
    //}))
    //.pipe(browserSync.stream());
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

    // Make this its own task



});

gulp.task('copy', function() {
   gulp.src(config.src.images)
   .pipe(gulp.dest(config.dest.images));
});
