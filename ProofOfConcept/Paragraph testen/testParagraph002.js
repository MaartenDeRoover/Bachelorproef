module.exports = {
  tags: ['paragraph2'],

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

  'creating a page with paragraph 2 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 2', pageDescription: 'Page with paragraph 2', paragraphValue: 'p_002' })
      .drupalInputParagraphImage({ image: 'img.jpg', alt: 'Alt of image in paragraph 2' })
      .drupalInputParagraphLink({ url: '<front>', title: 'Link to front page in paragraph 2', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p002.png', headless: browser.globals.headless })
      .drupalAssertParagraphImage({ alt: 'Alt of image in paragraph 2' })
      .drupalAssertParagraphLink({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 2' });
  },
};