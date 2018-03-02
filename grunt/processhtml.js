/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

module.exports = {
  build: {
    options: {
      data: {
        version: '<%= pkg.version %>',
      },
    },
    files: {
      'www/index.html': ['src/index.html'],
    },
  },
  release: {
    options: {
      data: {
        version: '<%= pkg.version %>',
      },
    },
    files: {
      'www/index.html': ['src/index.html'],
    },
  },
};
