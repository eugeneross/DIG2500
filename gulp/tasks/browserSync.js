import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browserSync', () =>  {


// Declare the file to serve

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

// New browserSync initiation

  browserSync.init({
    // Choose where to serve from
    server: {
      baseDir: config.dest.dir,
      middleware: (req, res, next) => {
        const fileHref = url.parse(req.url).href;

        if ( !ASSET_EXTENSION_REGEX.test(fileHref)) {
          req.url = '/' + DEFAULT_FILE;
        }

        return next();
      }
    },

    injectChanges: true,

    // Options
    port: config.browserPort,
    ui: {
      port: config.UIPort
    }
  });

});
