module.exports = {
  '@tags': ['test'],
  before: function(browser) {
    browser
      .url('http://nightwatch.local/')
      .drupalRelativeURL('/user/login')
      .waitForElementVisible('input[name=name]', 1000)
      .setValue('input[name=name]', 'admin')
      .setValue('input[name=pass]', 'admin')
      .click('#edit-submit')
      .waitForElementVisible('#block-bartik-page-title', 1000)
      .assert.containsText('#block-bartik-page-title', 'admin');
  },
  after: function(browser) {
    browser
      .useXpath()
      .click("//a[text()='Log out']")
      .drupalLogAndEnd({ onlyOnError: false });
  },
  'Logging in, creating a basic page, logging out': (browser) => {
    browser
      .drupalRelativeURL('/node/add/page')
      .waitForElementVisible('input[id=edit-title-0-value]', 1000)
      .setValue('input[id=edit-title-0-value]', 'A new node')
      .click('#edit-submit')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#block-bartik-page-title', 'A new node')
      .waitForElementVisible('body', 1000)
      .useXpath()
      .click("//a[text()='Delete']")
      .useCss()
      .waitForElementVisible('#block-seven-page-title', 1000)
      .assert.containsText('#block-seven-page-title', 'Are you sure you want to delete the content')
      .click('#edit-submit')
      .waitForElementVisible('#block-bartik-page-title', 1000)
      .assert.containsText('#block-bartik-page-title', 'Welcome to Nightwatch');
  },
};
