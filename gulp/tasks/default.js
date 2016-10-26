import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('default', ['dev'], browserSync.reload);
