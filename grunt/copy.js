/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
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
        'index.html',
        'manifest.json',
        'service-worker.js',
      ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/framework7/dist/',
      src: [
        'css/framework7.material.min.css',
        'js/framework7.min.js',
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
    },{
      expand: true,
      cwd: 'bower_components/font-awesome/',
      src: [
        'fonts/**',
        'css/font-awesome.min.css',
      ],
      dest: 'www/',
      nonull: true,
    },],
  },
};
