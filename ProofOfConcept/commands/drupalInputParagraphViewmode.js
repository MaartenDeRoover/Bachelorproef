exports.command = function drupalInputParagraphViewmode({ viewmodep001, viewmodep003, viewmodep012 }) {
  if (typeof viewmodep001 !== 'undefined') {
    this.waitForElementVisible('input[value="' + viewmodep001 + '"]', this.globals.timeoutTime)
      .click('input[value="' + viewmodep001 + '"]');
  }

  if (typeof viewmodep003 !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_003_view_mode]"] option[value=' + viewmodep003 + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_003_view_mode]"] option[value=' + viewmodep003 + ']');
  }

  if (typeof viewmodep012 !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_012_view_mode]"] option[value=' + viewmodep012 + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_012_view_mode]"] option[value=' + viewmodep012 + ']');
  }

  return this;
};