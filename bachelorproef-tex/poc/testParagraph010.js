module.exports = {
  tags: ['paragraph10'],

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

  'creating a page with paragraph 10 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 10', pageDescription: 'Page with paragraph 10', paragraphValue: 'p_010' })
      .drupalInputParagraphTitle({ title: 'Title of paragraph 10', subtitle: 'Subtitle of paragraph 10', teaser: 'Teaser of paragraph 10' })
      .drupalInputParagraphImage({ imagep010: 'img.jpg', altp010: 'Alt of image in paragraph 10' })
      .drupalInputParagraphLink({ urlp010: '<front>', titlep010: 'Link to front page in paragraph 10', targetp010: '_self' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 10', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p010.png', headless: browser.globals.headless })
      .drupalAssertParagraphTitle({ title: 'Title of paragraph 10', subtitle: 'Subtitle of paragraph 10', teaser: 'Teaser of paragraph 10' })
      .drupalAssertParagraphImage({ alt: 'Alt of image in paragraph 10' })
      .drupalAssertParagraphLink({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 10' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 10' });
  },
};