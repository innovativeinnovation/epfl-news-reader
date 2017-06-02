/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = {
  fileToCacheDev: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/',
          '/index.html',
          '/css/framework7.material.custom.min.css',
          '/css/app.css',
          '/js/vendors/framework7.custom.min.js',
          '/js/handlebars.runtime.min.js',
          '/js/templates/all.js',
          '/js/utils/Constants.js',
          '/js/utils/Events.js',
          '/js/utils/Utils.js',
          '/js/controllers/MainController.js',
          '/js/views/MainView.js',
          '/js/views/NewsView.js',
          '/js/app.js',
        ],
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'www/',
    },],
  },
  fileToCacheProd: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/epfl-news-reader/',
          '/epfl-news-reader/index.html',
          '/epfl-news-reader/css/epfl-news-<%= pkg.version %>.min.css',
          '/epfl-news-reader/js/epfl-news-<%= pkg.version %>.min.js',
        ],
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'build/',
    },],
  },
  indexCssJs: {
    options: {
      patterns: [{
        match: /epfl-news.min/g,
        replacement: 'epfl-news-<%= pkg.version %>.min',
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['www/index.html'],
      dest: 'www/',
    },],
  },
  manifestStartUrl: {
    options: {
      patterns: [{
        match: /\/index.html/g,
        replacement: '/epfl-news-reader/index.html',
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['www/manifest.json'],
      dest: 'www/',
    },],
  },
};
