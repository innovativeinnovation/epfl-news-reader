/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2020.
 * See the LICENSE file for more details.
 */

'use strict';

(function () {
  EPFLNews.Utils = {

    prettyDate: function (time) {
      var numbers = time.split(/[^0-9]/);
      var date = new Date(
        numbers[0], numbers[1] - 1, numbers[2], numbers[3], numbers[4],
        numbers[5]
      );
      var diff = (((new Date()).getTime() - date.getTime()) / 1000);
      var dayDiff = Math.floor(diff / 86400);

      if (isNaN(dayDiff) || dayDiff < 0) {
        return;
      }

      var r = (
        (dayDiff === 0 && (
          (diff < 60 && EPFLNews.Utils.getLangValue('TIME_NOW')) ||
          (diff < 120 && EPFLNews.Utils.getLangValue('TIME_MINUTE_AGO')) ||
          (diff < 3600 && EPFLNews.Utils.getLangValue(
            'TIME_MINUTES_AGO', Math.floor(diff / 60))) ||
          (diff < 7200 && EPFLNews.Utils.getLangValue('TIME_HOUR_AGO')) ||
          (diff < 86400 && EPFLNews.Utils.getLangValue(
            'TIME_HOURS_AGO', Math.floor(diff / 3600))))) ||
        (dayDiff === 1 && EPFLNews.Utils.getLangValue('TIME_YESTERDAY') +
          ' ' + EPFLNews.Utils.prettyTime(date)) ||
        (EPFLNews.Utils.formatDate(date))
      );
      return r;
    },

    prettyTime: function (date) {
      var values = date.toTimeString().split(':');
      return values[0] + ':' + values[1];
    },

    formatDate: function (date) {
      var months = {
        fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
        en: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
      };

      var r = [
        date.getDate(),
        months[EPFLNews.language][date.getMonth()],
        date.getFullYear()
      ];
      return r.join(' ');
    },

    doublePictureSize: function (link) {
      if (link) {
        return link.replace('324x182', '648x364');
      }
      return link;
    },

    getLangValue: function (key, data) {
      var value = null;
      if (EPFLNews.i18n[EPFLNews.language][key]) {
        value = EPFLNews.i18n[EPFLNews.language][key];
      } else {
        value = EPFLNews.i18n[EPFLNews.Constants.DEFAULT_LANGUAGE][key];
      }
      if (typeof data !== 'undefined') {
        value = sprintf(value, data);
      }
      return value;
    }

  };
})();
