exports.command = function drupalCreatePageWithParagraph({ pageTitle, pageDescription, paragraphValue }) {
  if (typeof pageTitle !== 'undefined') {
    this.drupalRelativeURL('/node/add/page')
      .waitForElementVisible('input[id=edit-title-0-value]', this.globals.timeoutTime)
      .setValue('input[id=edit-title-0-value]', pageTitle);
  }

  if (typeof pageDescription !== 'undefined') {
    this.waitForElementVisible('#edit-field-description-0-value', this.globals.timeoutTime)
      .setValue('#edit-field-description-0-value', pageDescription);
  }

  if (typeof paragraphValue !== 'undefined') {
    this.waitForElementVisible('#edit-field-paragraphs-add-more-add-more-select option[value=' + paragraphValue + ']', this.globals.timeoutTime)
      .click('#edit-field-paragraphs-add-more-add-more-select option[value=' + paragraphValue + ']')
      .click('#edit-field-paragraphs-add-more-add-more-button')
      .waitForElementVisible('input[value="Add another Paragraph"]', this.globals.timeoutTime);
  }

  return this;
};