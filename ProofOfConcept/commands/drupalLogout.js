exports.command = function drupalLogout(callback) {
  const self = this;

  this.drupalRelativeURL('/user/logout');

  if (typeof callback === 'function') {
    callback.call(self);
  }

  return this;
};