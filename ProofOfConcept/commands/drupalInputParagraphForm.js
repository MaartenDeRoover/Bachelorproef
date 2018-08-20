exports.command = function drupalInputParagraphForm({ form }) {
  if (typeof form !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_webform][0][target_id]"]', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_webform][0][target_id]"] option[value=' + form + ']');
  }

  return this;
};