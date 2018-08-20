exports.command = function drupalAssertParagraphVideo() {
  this.waitForElementVisible('.paragraph--type-p-006 .field--type-video-embed-field iframe', this.globals.timeoutTime);

  return this;
};