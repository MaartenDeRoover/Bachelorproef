exports.command = function drupalInputParagraphGuidance({ title, teaser }) {
  this.waitForElementVisible('summary[role="button"]', this.globals.timeoutTime)
    .click('summary[role="button"]');

  if (typeof title !== 'undefined') {
    this.setValue('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_title][0][value]"]', title);
  }

  if (typeof teaser !== 'undefined') {
    this.setValue('textarea[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_teaser][0][value]"]', teaser);
  }

  return this;
};