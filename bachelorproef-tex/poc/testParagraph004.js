module.exports = {
  tags: ['paragraph4'],

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

  'creating a page with paragraph 4 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 4', pageDescription: 'Page with paragraph 4', paragraphValue: 'p_004' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 4', subtitle: 'Subtitle of paragraph 4', teaser: 'Teaser of paragraph 4' })
      .drupalInputParagraphFaq({ text: 'Title of FAQ item 1' })
      .drupalInputParagraphCkeditor({ text: 'Ckeditor of paragraph 4' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 4', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p004.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 4', subtitle: 'Subtitle of paragraph 4', teaser: 'Teaser of paragraph 4' })
      .drupalAssertParagraphFaq({ title: 'Title of FAQ item 1', ckeditor: 'Ckeditor of paragraph 4' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 4' });
  },
};