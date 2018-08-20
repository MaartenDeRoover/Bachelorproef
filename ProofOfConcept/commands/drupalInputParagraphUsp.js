exports.command = function drupalInputParagraphUsp({ title }) {
  if (typeof title !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_007_view_mode]"]', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_007_view_mode]"] option[value="2_column"]')
      .setValue('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_title][0][value]"]', title);
  }

  return this;
};