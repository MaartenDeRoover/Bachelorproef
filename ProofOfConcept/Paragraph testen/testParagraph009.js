module.exports = {
  tags: ['paragraph9'],

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

  'creating a page with paragraph 9 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 9', pageDescription: 'Page with paragraph 9', paragraphValue: 'p_009' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 9', subtitle: 'Subtitle of paragraph 9', teaser: 'Teaser of paragraph 9' })
      .drupalInputParagraphImage({ imagep009: 'img.jpg', altp009: 'Alt of image in paragraph 9' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 9', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p009.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 9', subtitle: 'Subtitle of paragraph 9', teaser: 'Teaser of paragraph 9' })
      .drupalAssertParagraphImage({ altp009: 'Alt of image in paragraph 9' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 9' });
  },
};