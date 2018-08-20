exports.command = function drupalAssertParagraphGuidance({ title, teaser }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-012 .paragraph--type-p-012-child .field--name-field-p-title h4', title);
  }

  if (typeof teaser !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-012 .paragraph--type-p-012-child .field--name-field-p-teaser', teaser);
  }

  return this;
};