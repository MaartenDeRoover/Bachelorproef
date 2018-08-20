module.exports = {
  tags: ['paragraph7'],

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

  'creating a page with paragraph 7 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 7', pageDescription: 'Page with paragraph 7', paragraphValue: 'p_007' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 7', subtitle: 'Subtitle of paragraph 7', teaser: 'Teaser of paragraph 7' })
      .drupalInputParagraphUsp({ title: 'Title of USP' })
      .drupalInputParagraphImage({ imagep007: 'img.jpg', altp007: 'Alt of image in paragraph 7' })
      .drupalInputParagraphCkeditor({ text: 'Ckeditor of paragraph 7' })
      .drupalInputParagraphLink({ urlp007: '<front>', titlep007: 'Link to front page in paragraph 7', targetp007: '_self' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 7', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p007.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 7', subtitle: 'Subtitle of paragraph 7', teaser: 'Teaser of paragraph 7' })
      .drupalAssertParagraphUsp({ title: 'Title of USP', text: 'Ckeditor of paragraph 7' })
      .drupalAssertParagraphImage({ altp007: 'Alt of image in paragraph 7' })
      .drupalAssertParagraphLink({ urlp007: browser.globals.launch_url + '/' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 7' });
  },
};