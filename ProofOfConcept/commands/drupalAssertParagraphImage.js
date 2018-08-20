exports.command = function drupalAssertParagraphImage({ alt, altp007, altp009 }) {
  if (typeof alt !== 'undefined') {
    this.assert.attributeEquals('.paragraph .field--name-field-p-image img', 'alt', alt);
  }

  if (typeof altp007 !== 'undefined') {
    this.assert.attributeEquals('.paragraph--type-p-007 .field__item--name-field-p-007-children .field--name-image-url-field img', 'alt', altp007);
  }

  if (typeof altp009 !== 'undefined') {
    this.assert.attributeEquals('.paragraph--type-p-009 .field--name-field-p-images-unlimited img', 'alt', altp009);
  }

  return this;
};