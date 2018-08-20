exports.command = function drupalScreenshot({ path, headless }) {
  if (typeof path !== 'undefined') {
    if (typeof headless !== 'undefined') {
      if (headless) {
        this.resizeWindow(1400, 1400);
      }
    }

    this.saveScreenshot(path);
  }

  return this;
};