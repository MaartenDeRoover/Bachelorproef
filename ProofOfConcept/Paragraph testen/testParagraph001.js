module.exports = {
  tags: ['paragraph1'],

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

  'creating a page with paragraph 1 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 1', pageDescription: 'Page with paragraph 1', paragraphValue: 'p_001' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 1', subtitle: 'Subtitle of paragraph 1' })
      .drupalInputParagraphCkeditor({ text: 'Ckeditor of paragraph 1' })
      .drupalInputParagraphImage({ image: 'img.jpg', alt: 'Alt of image in paragraph 1', viewmode: 'image_right' })
      .drupalInputParagraphViewmode({ viewmodep001: 'image_right' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 1', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p001.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 1', subtitle: 'Subtitle of paragraph 1' })
      .drupalAssertParagraphCkeditor({ text: 'Ckeditor of paragraph 1' })
      .drupalAssertParagraphImage({ alt: 'Alt of image in paragraph 1' })
      .drupalAssertParagraphViewmode({ viewmodep001: 'image_right' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 1' });
  },
};