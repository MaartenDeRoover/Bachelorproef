exports.command = function drupalSubmit(callback) {
  const self = this;

  this.waitForElementVisible('#edit-submit', this.globals.timeoutTime)
    .click('#edit-submit');

  if (typeof callback === 'function') {
    callback.call(self);
  }

  return this;
};