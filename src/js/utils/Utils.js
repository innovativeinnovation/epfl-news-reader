/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function() {
  'use strict';

  EPFLNews.Utils = {

    prettyDate: function(time) {
      var numbers = time.split(/[^0-9]/);
      var date    = new Date (
        numbers[0],numbers[1] - 1,numbers[2],numbers[3],numbers[4],numbers[5]
      );
      var diff    = (((new Date()).getTime() - date.getTime()) / 1000);
      var dayDiff = Math.floor(diff / 86400);

      if (isNaN(dayDiff) || dayDiff < 0) {
        return;
      }

      var r = (
        (dayDiff === 0 && (
          (diff < 60 && 'just now') ||
          (diff < 120 && '1 minute ago') ||
          (diff < 3600 && Math.floor(diff / 60) + ' minutes ago') ||
          (diff < 7200 && '1 hour ago') ||
          (diff < 86400 && Math.floor(diff / 3600) + ' hours ago')
        )) ||
        (dayDiff === 1 && 'Yesterday at ' + EPFLNews.Utils.prettyTime(date)) ||
        (EPFLNews.Utils.formatDate(date))
      );
      return r;
    },

    prettyTime: function(date) {
      var values = date.toTimeString().split(':');
      return values[0] + ':' + values[1];
    },

    formatDate: function(date) {
      var months = {
        fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
        ],
        en: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
      };

      var r = [
        date.getDate(),
        months[EPFLNews.language][date.getMonth()],
        date.getFullYear(),
      ];
      return r.join(' ');
    },

    doublePictureSize: function(link) {
      return link.replace('324x182', '648x364');
    },

  };

})();
