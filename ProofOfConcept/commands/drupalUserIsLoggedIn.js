exports.command = function drupalUserIsLoggedIn(callback) {
  if (typeof callback === 'function') {
    this.getCookies(cookies => {
      const sessionExists = cookies.value.some(cookie =>
        cookie.name.match(/^SESS/),
      );

      callback.call(this, sessionExists);
    });
  }

  return this;
};