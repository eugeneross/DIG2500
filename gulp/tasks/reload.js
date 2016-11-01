import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('reload', () => {
    browserSync.reload();
});
