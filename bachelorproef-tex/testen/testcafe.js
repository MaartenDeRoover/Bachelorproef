import { Selector } from 'testcafe';

fixture`TestCafé test`
  .page`http://testcafe.local/`

  .beforeEach(async t => {
    await t.expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('Welcome to TestCafé')
      .click('#block-bartik-account-menu .content ul li a')
      .typeText('input[name=name]', 'admin')
      .typeText('input[name=pass]', 'admin')
      .click('#edit-submit')
      .expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('admin');
  })

  .afterEach(async t => {
    await t.click(Selector('#block-bartik-account-menu ul li a').withText('Log out'));
  });

test('Creating a basic page and deleting that page', async t => {
  await t.click('#toolbar-item-administration')
    .click('#toolbar-link-system-admin_content')
    .click(Selector('ul.action-links li a').withText('Add content'))
    .click(Selector('ul.admin-list li a').withText('Basic page'))
    .typeText('#edit-title-0-value', 'Een nieuwe node')
    .click('#edit-submit')
    .expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('Een nieuwe node')
    .click(Selector('nav.tabs ul li a').withText('Delete'))
    .expect(Selector('#block-seven-page-title').find('h1').innerText).contains('Are you sure you want to delete the content Een nieuwe node?')
    .click('#edit-submit');
});