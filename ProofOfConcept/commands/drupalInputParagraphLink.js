exports.command = function drupalInputParagraphLink({ url, title, target, urlp007, titlep007, targetp007, urlp010, titlep010, targetp010, urlp012, titlep012, targetp012 }) {
  if (typeof url !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_link][0][uri]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_link][0][uri]"]', url);
  }

  if (typeof title !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_link][0][title]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_link][0][title]"]', title);
  }

  if (typeof target !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + target + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + target + ']');
  }

  if (typeof urlp007 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][uri]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][uri]"]', urlp007);
  }

  if (typeof titlep007 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][title]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][title]"]', titlep007);
  }

  if (typeof targetp007 !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp007 + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp007 + ']');
  }

  if (typeof urlp010 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][uri]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][uri]"]', urlp010);
  }

  if (typeof titlep010 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][title]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][title]"]', titlep010);
  }

  if (typeof targetp010 !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp010 + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp010 + ']');
  }

  if (typeof urlp012 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][uri]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][uri]"]', urlp012);
  }

  if (typeof titlep012 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][title]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][title]"]', titlep012);
  }

  if (typeof targetp012 !== 'undefined') {
    this.waitForElementVisible('select[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp012 + ']', this.globals.timeoutTime)
      .click('select[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_link][0][options][attributes][target]"] option[value= ' + targetp012 + ']');
  }

  return this;
};