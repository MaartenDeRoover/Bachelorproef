module.exports = {
  tags: ['paragraph5'],

  before: function (browser) {
    browser
      .url(browser.globals.launch_url)
      .drupalLoginAsAdmin();
  },

  after: function (browser) {
    browser
      .drupalDeletePage()
      .drupalLogout()
      .end();
  },

  'creating a page with paragraph 5 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 5', pageDescription: 'Page with paragraph 5', paragraphValue: 'p_005' })
      .drupalInputParagraphImage({ image: 'img.jpg', alt: 'Alt of image in paragraph 5' })
      .drupalInputParagraphCkeditor({ text: 'Ckeditor of paragraph 5' })
      .drupalInputParagraphTestimonial({ name: 'Testimonial name', extrarule: 'Testimonial extra rule' })
      .drupalInputParagraphLink({ url: '<front>', title: 'Link to front page in paragraph 5', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p005.png', headless: browser.globals.headless })
      .drupalAssertParagraphCkeditor({ text: 'Ckeditor of paragraph 5' })
      .drupalAssertParagraphTestimonial({ name: 'Testimonial name', extrarule: 'Testimonial extra rule' })
      .drupalAssertParagraphImage({ alt: 'Alt of image in paragraph 5' })
      .drupalAssertParagraphLink({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 5' });
  },
};