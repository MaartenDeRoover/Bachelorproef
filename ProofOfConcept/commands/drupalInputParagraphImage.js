exports.command = function drupalInputParagraphImage({ image, alt, imagep007, altp007, imagep009, altp009, imagep010, altp010, imagep012, altp012 }) {
  if (typeof image !== 'undefined') {
    this.waitForElementVisible('input[name="files[field_paragraphs_0_subform_field_p_image_0]"]', this.globals.timeoutTime)
      .setValue('input[name="files[field_paragraphs_0_subform_field_p_image_0]"]', require('path').resolve(__dirname + '/images/' + image));
  }

  if (typeof alt !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_image][0][alt]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_image][0][alt]"]', alt);
  }

  if (typeof imagep007 !== 'undefined') {
    this.waitForElementVisible('input[name="files[field_paragraphs_0_subform_field_p_007_children_0_subform_field_p_image_0]"]', this.globals.timeoutTime)
      .setValue('input[name="files[field_paragraphs_0_subform_field_p_007_children_0_subform_field_p_image_0]"]', require('path').resolve(__dirname + '/images/' + imagep007));
  }

  if (typeof altp007 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_image][0][alt]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_007_children][0][subform][field_p_image][0][alt]"]', altp007);
  }

  if (typeof imagep009 !== 'undefined') {
    this.waitForElementVisible('input[name="files[field_paragraphs_0_subform_field_p_images_unlimited_0][]"]', this.globals.timeoutTime)
      .setValue('input[name="files[field_paragraphs_0_subform_field_p_images_unlimited_0][]"]', require('path').resolve(__dirname + '/images/' + imagep009));
  }

  if (typeof altp009 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_images_unlimited][0][alt]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_images_unlimited][0][alt]"]', altp009);
  }

  if (typeof imagep010 !== 'undefined') {
    this.waitForElementVisible('input[name="files[field_paragraphs_0_subform_field_p_010_children_0_subform_field_p_image_0]"]', this.globals.timeoutTime)
      .setValue('input[name="files[field_paragraphs_0_subform_field_p_010_children_0_subform_field_p_image_0]"]', require('path').resolve(__dirname + '/images/' + imagep010));
  }

  if (typeof altp010 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_image][0][alt]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_010_children][0][subform][field_p_image][0][alt]"]', altp010);
  }

  if (typeof imagep012 !== 'undefined') {
    this.waitForElementVisible('input[name="files[field_paragraphs_0_subform_field_p_012_children_0_subform_field_p_image_0]"]', this.globals.timeoutTime)
      .setValue('input[name="files[field_paragraphs_0_subform_field_p_012_children_0_subform_field_p_image_0]"]', require('path').resolve(__dirname + '/images/' + imagep012));
  }

  if (typeof altp012 !== 'undefined') {
    this.waitForElementVisible('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_image][0][alt]"]', this.globals.timeoutTime)
      .setValue('input[name="field_paragraphs[0][subform][field_p_012_children][0][subform][field_p_image][0][alt]"]', altp012);
  }
  
  return this;
};