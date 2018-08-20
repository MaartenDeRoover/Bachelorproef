module.exports = {
  tags: ['paragraph8'],

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

  'creating a page with paragraph 8 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 8', pageDescription: 'Page with paragraph 8', paragraphValue: 'p_008' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 8', subtitle: 'Subtitle of paragraph 8', teaser: 'Teaser of paragraph 8' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 8', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p008.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 8', subtitle: 'Subtitle of paragraph 8', teaser: 'Teaser of paragraph 8' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 8' });
  },
};