exports.command = function drupalAssertParagraphButton({ title, url }) {
  if (typeof title !== 'undefined') {
    this.assert.containsText('.paragraph .field--name-field-p-button a', title);
  }

  if (typeof url !== 'undefined') {
    this.waitForElementVisible('.paragraph .field--name-field-p-button a', this.globals.timeoutTime)
      .click('.paragraph .field--name-field-p-button a')
      .assert.urlEquals(url)
      .back();
  }

  return this;
};