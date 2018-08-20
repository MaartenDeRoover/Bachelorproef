exports.command = function drupalRelativeURL(pathname, callback) {
  const self = this;

  this.url(this.globals.launch_url + pathname);

  if (typeof callback === 'function') {
    callback.call(self);
  }

  return this;
};