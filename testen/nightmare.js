const Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })
const chai = require('chai')
const expect = chai.expect

describe('Nightmare ', async () => {
  var title;

  before('Going to the site and logging in', async () => {
    await nightmare
      .goto('http://nightmare.local')
      .wait('#block-bartik-page-title', 1000);
    title = await nightmare.evaluate(() => { return document.querySelector('#block-bartik-page-title').textContent; });
    expect(title).to.have.string('Welcome to Nightmare');
    await nightmare
      .wait('#block-bartik-account-menu .content ul li a', 1000)
      .click('#block-bartik-account-menu .content ul li a')
      .wait('input[name=name]', 1000)
      .type('input[name=name]', 'admin')
      .type('input[name=pass]', 'admin')
      .click('#edit-submit')
      .wait('.contextual', 1000);
    title = await nightmare.evaluate(() => { return document.querySelector('#block-bartik-page-title').textContent; });
    expect(title).to.have.string('admin');
  });

  it('going to the site and asserting the title is correct', async () => {
    await nightmare
      .wait('#toolbar-link-system-admin_content', 1000)
      .click('#toolbar-link-system-admin_content')
      .wait('#block-seven-local-actions ul li a', 1000)
      .click('#block-seven-local-actions ul li a')
      .wait('#block-seven-content ul li:last-child a', 1000)
      .click('#block-seven-content ul li:last-child a')
      .wait('input[id=edit-title-0-value]', 1000)
      .type('input[id=edit-title-0-value]', 'Een nieuwe node')
      .click('#edit-submit')
      .wait('#block-bartik-page-title', 1000);
    title = await nightmare.evaluate(() => { return document.querySelector('#block-bartik-page-title').textContent; });
    expect(title).to.have.string('Een nieuwe node');
    await nightmare
      .click('#block-bartik-local-tasks nav ul li:last-child a')
      .wait('#block-seven-page-title', 1000);
    title = await nightmare.evaluate(() => { return document.querySelector('#block-seven-page-title').textContent; });
    expect(title).to.have.string('Are you sure you want to delete the content Een nieuwe node?');
    await nightmare.click('#edit-submit');
  });

  after('logging out and closing the browser', async () => {
    await nightmare
      .wait('#block-bartik-account-menu .content ul li:last-child a', 1000)
      .click('#block-bartik-account-menu .content ul li:last-child a')
      .end();
  });
})