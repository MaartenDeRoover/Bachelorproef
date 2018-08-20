exports.command = function drupalAssertParagraphUsp({ title, text }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-007 .field__item--name-field-p-007-children .field--name-field-p-title h3', title);
  }

  if (typeof text !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-007 .field__item--name-field-p-007-children .field--name-field-p-text p', text);
  }

  return this;
};