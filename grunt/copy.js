/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'img/**', 'index.html'],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/framework7/dist/',
      src: [
        'css/framework7.material.min.css',
        'css/framework7.material.colors.min.css',
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
    },],
  },
};
