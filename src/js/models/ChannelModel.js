/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2021.
 * See the LICENSE file for more details.
 */

'use strict';

(function () {
  /**
   * Model for app channel
   *
   * @class ChannelModel
   * @constructor
   */
  EPFLNews.ChannelModel = function () {
    // Call the parent constructor
    EPFLNews.StorageModel.call(this, 'EPFLNews-Channel');
  };

  // Create object that inherits from AnatomyQuiz.StorageModel
  EPFLNews.ChannelModel.prototype = Object.create(
    EPFLNews.StorageModel.prototype
  );

  /**
   * Get channel
   *
   * @method getChannel
   * @return {String} returns the channel
   */
  EPFLNews.ChannelModel.prototype.getChannel = function () {
    if (this.enabled) {
      var channel = this.get(this.key);
      if (channel === null) {
        channel = this.getDefaultChannel(channel);
        this.set(channel);
      }
      return channel;
    }
    return this.getDefaultChannel(undefined);
  };

  /**
   * Get the best language that the app supports based on browser language
   *
   * @method getDefaultChannel
   * @param  channel
   * @return {String} returns the channel
   */
  EPFLNews.ChannelModel.prototype.getDefaultChannel = function (channel) {
    var supportedChannel = EPFLNews.Constants.SUPPORTED_CHANNEL;
    if (supportedChannel.indexOf(channel) >= 0) {
      return channel;
    }
    return EPFLNews.Constants.DEFAULT_CHANNEL;
  };
})();
