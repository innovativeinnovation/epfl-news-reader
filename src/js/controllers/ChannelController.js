/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  /**
   * Controller for changing channel
   *
   * @class ChannelController
   * @constructor
   */
  EPFLNews.ChannelController = function() {};

  /**
   * Change the channel.
   *
   * @method changeChannel
   * @param {String} channel
   */
  EPFLNews.ChannelController.prototype.changeChannel = function(toChannel) {

    // Get the model and set channel
    var channelModel = new EPFLNews.ChannelModel();
    channelModel.set(toChannel);
    EPFLNews.channel = toChannel;

    // Notify the user that the channel is loading
    $$('.loader').show();

    // Wait 500ms before reloading app
    setTimeout(function() {
      location.reload();
    }, 2000);
  };

})(Dom7);
