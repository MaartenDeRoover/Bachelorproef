exports.command = function drupalAssertParagraphCkeditor({ text }) {
  if (typeof text !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-text p', text);
  }

  return this;
};