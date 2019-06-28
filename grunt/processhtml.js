/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  build: {
    options: {
      data: {
        version: '<%= pkg.version %>'
      }
    },
    files: {
      'www/index.html': ['src/index.html']
    }
  },
  release: {
    options: {
      data: {
        version: '<%= pkg.version %>'
      }
    },
    files: {
      'www/index.html': ['src/index.html']
    }
  }
};
