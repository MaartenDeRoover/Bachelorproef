var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
describe('WebdriverIO ', function() {
    
    before('going to the site and logging in', async () => {
        browser.url('/');
        chai.expect('#block-bartik-page-title h1').to.have.text('Welcome to WebdriverIO');
        browser.click('#block-bartik-account-menu .content ul li a')
        .setValue('input[name=name]', 'admin')
        .setValue('input[name=pass]', 'admin')
        .click('#edit-submit');
        chai.expect('#block-bartik-page-title h1').to.have.text('admin');
    });
    after('logging out', async () => {
        browser.url('/user/logout');
    });
    it('should be able to create and delete a basic page', async () => {
        browser.click('#toolbar-item-administration')
        .click('#toolbar-link-system-admin_content')
        .click("#block-seven-local-actions ul li a")
        .click("//span[text()='Basic page']")
        .setValue('input[id=edit-title-0-value]', 'Een nieuwe node')
        .click('#edit-submit');
        chai.expect('#block-bartik-page-title h1').to.have.text('Een nieuwe node');
        browser.click("//a[text()='Delete']");
        chai.expect('#block-seven-page-title').to.have.text('Are you sure you want to delete the content Een nieuwe node?');
        browser.click('#edit-submit');
    });
});