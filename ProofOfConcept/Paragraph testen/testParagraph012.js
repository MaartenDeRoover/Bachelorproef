module.exports = {
  tags: ['paragraph12'],

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

  'creating a page with paragraph 12 and asserting the paragraph is created correctly': (browser) => {
    browser
      .drupalCreatePageWithParagraph({ pageTitle: 'Paragraph 12', pageDescription: 'Page with paragraph 12', paragraphValue: 'p_012' })
      .drupalInputParagraphViewmode({ viewmodep012: 'default_large' })
      .drupalInputParagraphGuidance({ title: 'Title guidance', teaser: 'Teaser guidance' })
      .drupalInputParagraphImage({ imagep012: 'img.jpg', altp012: 'Alt of image in paragraph 12' })
      .drupalInputParagraphLink({ urlp012: '<front>', titlep012: 'Link to front page in paragraph 12', targetp012: '_self' })
      .drupalInputParagraphButton({ url: '<front>', title: 'Link to front page in paragraph 12', target: '_self' })
      .drupalSubmit()
      .drupalScreenshot({ path: './nightwatch/screenshots/' + browser.globals.env + '/p012.png', headless: browser.globals.headless })
      .drupalAssertParagraphGuidance({ title: 'Title guidance', teaser: 'Teaser guidance' })
      .drupalAssertParagraphLink({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 12' })
      .drupalAssertParagraphButton({ url: browser.globals.launch_url + '/', title: 'Link to front page in paragraph 12' });
  },
};