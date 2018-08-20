exports.command = function drupalLoginAsAdmin() {
  if (typeof this.globals.adminUsername !== 'undefined' && typeof this.globals.adminPassword !== 'undefined') {
    this.drupalLogin({ name: this.globals.adminUsername, password: this.globals.adminPassword });
  }

  return this;
};