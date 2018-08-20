exports.command = function drupalInputParagraphVideo({ videourl }) {
  if (typeof videourl !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_video][0][value]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_video][0][value]"]', videourl);
  }

  return this;
};