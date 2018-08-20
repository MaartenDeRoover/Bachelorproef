exports.command = function drupalAssertParagraphLink({ title, url, urlp007 }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-link  a', title);
  }

  if (typeof url !== 'undefined') {
    this.waitForElementVisible('.paragraph .field--name-field-p-link  a', this.globals.timeoutTime)
      .click('.paragraph .field--name-field-p-link  a')
      .assert.urlEquals(url)
      .back();
  }

  if (typeof urlp007 !== 'undefined') {
    this.waitForElementVisible('.paragraph--type-p-007 .field__item--name-field-p-007-children .field--name-image-url-field a', this.globals.timeoutTime)
      .click('.paragraph--type-p-007 .field__item--name-field-p-007-children .field--name-image-url-field a')
      .assert.urlEquals(urlp007)
      .back();
  }

  return this;
};