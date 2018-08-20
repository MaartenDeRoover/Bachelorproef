exports.command = function drupalAssertParagraphTitle({ title, subtitle, teaser }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-title h2', title);
  }

  if (typeof subtitle !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-subtitle h3', subtitle);
  }

  if (typeof teaser !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-teaser', teaser);
  }
  
  return this;
};