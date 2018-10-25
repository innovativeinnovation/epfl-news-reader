/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018.
 * See the LICENSE file for more details.
 */

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: [
        'js/**',
        'img/**',
        'css/**',
        'manifest.json',
        'service-worker.js',
      ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/handlebars/',
      src: [
        'handlebars.runtime.min.js',
      ],
      dest: 'www/js/',
      nonull: true,
    },],
  },

  release: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: [
        'img/**',
        'manifest.json',
      ],
      dest: 'www/',
      nonull: true,
    },],
  },
};
