exports.command = function drupalAssertParagraphFaq({ title, ckeditor }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph--type-p-004 .field__item--name-field-p-004-item:first-of-type h3', title);
  }

  if (typeof ckeditor !== 'undefined') {
    this.waitForElementVisible('.paragraph--type-p-004 .field__item--name-field-p-004-item:first-of-type h3', this.globals.timeoutTime)
      .click('.paragraph--type-p-004 .field__item--name-field-p-004-item:first-of-type h3')
      .assert.containsText('.paragraph--type-p-004 .field__item--name-field-p-004-item:first-of-type .tab-item__content', ckeditor);
  }

  return this;
};