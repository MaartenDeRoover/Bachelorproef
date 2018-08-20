exports.command = function drupalInputParagraphFaq({ text }) {
  if (typeof text !== 'undefined') {
    this.waitForElementVisible('.field--name-field-p-004-item tbody tr:first-child summary[role="button"]', this.globals.timeoutTime)
      .click('.field--name-field-p-004-item tbody tr:first-child summary[role="button"]')
      .setValue('input[name="field_paragraphs[0][subform][field_p_004_item][0][container_1][title]"]', text);
  }

  return this;
};