exports.command = function drupalInputParagraphButton({ url, title, target }) {
  if (typeof url !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_button][0][uri]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_button][0][uri]"]', url);
  }

  if (typeof title !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_button][0][title]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_button][0][title]"]', title);
  }

  if (typeof target !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_button][0][options][attributes][target]"] option[value= ' + target + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_button][0][options][attributes][target]"] option[value= ' + target + ']');
  }

  return this;
};