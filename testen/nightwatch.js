module.exports = {
  before: function (browser) {
    browser
      .url('http://nightwatch.local')
      .assert.containsText('#block-bartik-page-title h1', 'Welcome to Nightwatch')
      .click('#block-bartik-account-menu .content ul li a')
      .setValue('input[name=name]', 'admin')
      .setValue('input[name=pass]', 'admin')
      .submitForm('#edit-submit')
      .assert.containsText('#block-bartik-page-title', 'admin');
  },

  after: function (browser) {
    browser
      .useXpath()
      .click("//a[text()='Log out']")
      .end();
  },

  'Creating a basic page and deleting that page': (browser) => {
    browser
      .click('#toolbar-item-administration')
      .click('#toolbar-link-system-admin_content')
      .click("#block-seven-local-actions ul li a")
      .useXpath()
      .click("//span[text()='Basic page']")
      .useCss()
      .setValue('input[id=edit-title-0-value]', 'Een nieuwe node')
      .submitForm('#edit-submit')
      .assert.containsText('#block-bartik-page-title', 'Een nieuwe node')
      .useXpath()
      .click("//a[text()='Delete']")
      .useCss()
      .assert.containsText('#block-seven-page-title', 'Are you sure you want to delete the content Een nieuwe node?')
      .submitForm('#edit-submit');
  },
};