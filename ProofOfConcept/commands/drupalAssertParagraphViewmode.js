exports.command = function drupalAssertParagraphViewmode({ viewmodep001, viewmodep003 }) {
  if (typeof viewmodep001 !== 'undefined') {
    switch (viewmodep001) {
      case 'image_right':
        this.assert.cssProperty('.paragraph .field--image', 'float', 'right');
        break;
      case 'image_left':
        this.assert.cssProperty('.paragraph .field--image', 'float', 'left');
        break;
    }
  }

  if (typeof viewmodep003 !== 'undefined') {
    switch (viewmodep003) {
      case 'centered':
        this.assert.cssProperty('.p-003--view-mode--centered', 'text-align', 'center');
        break;
      case 'left':
        this.assert.cssProperty('.p-003--view-mode--left', 'text-align', 'left');
        break;
    }
  }

  return this;
};