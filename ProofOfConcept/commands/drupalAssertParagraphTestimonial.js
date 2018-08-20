exports.command = function drupalAssertParagraphTestimonial({name, extrarule}) {
  if(typeof name !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-005 .field--name-field-p-name', name);
  }

  if(typeof extrarule !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-005 .field--name-field-p-extra-rule', extrarule);
  }
  
  return this;
};