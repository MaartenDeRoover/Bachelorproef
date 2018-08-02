import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://testcafe.local/`
    .beforeEach( async t => {
      await t.expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('Welcome to Testcafe')
      .click('#block-bartik-account-menu .content ul li a')
      .typeText('input[name=name]', 'admin')
      .typeText('input[name=pass]', 'admin')
      .click('#edit-submit')
      .expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('admin');
    })
    .afterEach( async t => {
      await t.click(Selector('#block-bartik-account-menu ul li a').withText('Log out'))
      .expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('Welcome to Testcafe');
    });
const del = Selector('nav.tabs ul li a');
test('My first test', async t => {
  await t.navigateTo('/node/add/page')
    .typeText('#edit-title-0-value', 'A new node')
    .click('#edit-submit')
    .expect(Selector('#block-bartik-page-title').find('h1').innerText).contains('A new node')
    .click(del.withText('Delete'))
    .click('#edit-submit');
});