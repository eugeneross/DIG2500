'use strict';

// Define our paths here for easy reference. 

const config = {

  browserPort: 3000,
  UIPort:      3001,

  src: {
    dir:    './src/',
    index:  './src/views/index.pug',
    views:  './src/views/**/*.pug',
    styles: './src/assets/styles/**/*.sass',
    js:     './src/assets/js/**/*.js',
    images: './src/assets/images/**/*.{jpeg,jpg,png,gif}',
  },

  dest: {
    dir:    './public/',
    index:  './public/index.html',
    views:  './src/public/**/*.html',
    styles: './public/assets/styles/',
    js:     './public/assets/js/',
    images: './public/assets/images/',
  },

lint: {
  scripts: './src/assets/js/*.js',
  gulp:    './gulp/tasks/*.js',
},

  assetExtensions: [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

};

export default config;
