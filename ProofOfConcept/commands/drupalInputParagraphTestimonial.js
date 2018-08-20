exports.command = function drupalInputParagraphTestimonial({ name, extrarule }) {
  if (typeof name !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_name][0][value]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_name][0][value]"]', name);
  }

  if (typeof extrarule !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_extra_rule][0][value]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_extra_rule][0][value]"]', extrarule);
  }

  return this;
};