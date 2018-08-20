module.exports = {
  tags: ['paragraph11'],

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

  'creating a page with paragraph 11 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 11', pageDescription: 'Page with paragraph 11', paragraphValue: 'p_011' })
      .drupalInputParagraphForm({ form: 'contact' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p011.png', headless: browser.globals.headless })
      .drupalAssertParagraphForm({ subject: 'Subject of contact form', message: 'Message of contact form' });
  },
};