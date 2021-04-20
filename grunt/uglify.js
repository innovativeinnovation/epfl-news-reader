/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2021.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    compress: {
      drop_console: true
    }
  },
  release: {
    files: {
      'www/js/epfl-news-<%= pkg.version %>.min.js': [
        'src/js/vendors/framework7.custom.min.js',
        'src/js/vendors/sprintf.min.js',
        'node_modules/handlebars/dist/handlebars.runtime.min.js',
        'build/js/templates/all.js',
        'src/js/views/*.js',
        'src/js/utils/*.js',
        'src/js/models/abstract/*.js',
        'src/js/models/*.js',
        'src/js/controllers/*.js',
        'src/js/app.js'
      ],
      'www/service-worker.js': [
        'build/service-worker.js'
      ]
    }
  }
};
