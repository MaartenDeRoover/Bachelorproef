exports.command = function drupalLogin({ name, password }, callback) {
  if (typeof name !== 'undefined' && typeof password !== 'undefined') {
    const self = this;

    this.drupalUserIsLoggedIn(sessionExists => {
      if (sessionExists) {
        this.drupalLogout();
      }

      this.drupalRelativeURL('/user/login')
        .setValue('input[name="name"]', name)
        .setValue('input[name="pass"]', password)
        .submitForm('#user-login-form')
        .waitForElementVisible('#toolbar-bar', this.globals.timeoutTime);
    });

    if (typeof callback === 'function') {
      callback.call(self);
    }
  }

  return this;
};