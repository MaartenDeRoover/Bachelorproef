module.exports = {
  tags: ['paragraph6'],

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

  'creating a page with paragraph 6 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 6', pageDescription: 'Page with paragraph 6', paragraphValue: 'p_006' })
      .drupalInputParagraphVideo({ videourl: 'https://youtu.be/qvBX9VgPGSg' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p006.png', headless: browser.globals.headless })
      .drupalAssertParagraphVideo();
  },
};