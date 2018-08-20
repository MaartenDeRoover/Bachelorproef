exports.command = function drupalInputParagraphTitle({ title, subtitle, teaser }) {
  if (typeof title !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_title][0][value]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_title][0][value]"]', title);
  }

  if (typeof subtitle !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_subtitle][0][value]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_subtitle][0][value]"]', subtitle);
  }

  if (typeof teaser !== 'undefined') {
    this.waitForElementVisible('textarea[name="field_paragraphs[0][subform][field_p_teaser][0][value]"]', this.globals.timeoutTime)
      .setValue('textarea[name="field_paragraphs[0][subform][field_p_teaser][0][value]"]', teaser);
  }
  
  return this;
};