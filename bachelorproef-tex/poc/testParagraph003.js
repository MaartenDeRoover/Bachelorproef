module.exports = {
  tags: ['paragraph3'],

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

  'creating a page with paragraph 3 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 3', pageDescription: 'Page with paragraph 3', paragraphValue: 'p_003' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 3', teaser: 'Teaser of paragraph 3' })
      .drupalInputParagraphViewmode({ viewmodep003: 'centered' })
      .drupalInputParagraphCkeditor({ text: 'Ckeditor of paragraph 3' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 3', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p003.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 3', teaser: 'Teaser of paragraph 3' })
      .drupalAssertParagraphCkeditor({ text: 'Ckeditor of paragraph 3' })
      .drupalAssertParagraphViewmode({ viewmodep003: 'centered' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 3' });
  },
};