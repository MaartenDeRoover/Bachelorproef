exports.command = function drupalAssertParagraphForm({ subject, message }) {
  this.waitForElementVisible('input[name="name"]', this.globals.timeoutTime)
    .assert.attributeEquals('input[name="name"]', 'value', this.globals.adminUsername)
    .assert.attributeEquals('input[name="email"]', 'value', this.globals.adminUsername + '@rocketship.local');

  if (typeof subject !== 'undefined') {
    this.setValue('input[name="subject"]', subject);
  }

  if (typeof message !== 'undefined') {
    this.setValue('textarea[name="message"]', message);
  }

  if (typeof subject !== 'undefined' && typeof message !== 'undefined') {
    this.click('#edit-actions-submit')
      .assert.urlEquals(this.globals.launch_url + '/')
      .back();
  }
  return this;
};