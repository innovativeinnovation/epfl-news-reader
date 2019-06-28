/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  release: {
    files: {
      'www/css/epfl-news-<%= pkg.version %>.min.css': [
        'src/css/framework7.material.custom.min.css',
        'build/css/app.css'
      ]
    }
  }
};
