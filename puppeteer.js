const puppeteer = require('puppeteer')
const chai = require('chai')
const expect = chai.expect

describe('Puppeteer ', async() => {
    let browser, page;
    var title;

    before('Going to the site and logging in', async() => {
        browser = await puppeteer.launch({
            headless: false,
            args: ['--no-sandbox']
        });
        page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 800
        });
        await page.goto('http://puppeteer.local', {
            timeout: 0,
            waitUntil: 'domcontentloaded'
        });
        title = await page.evaluate(() => {
            return document.querySelector('#block-bartik-page-title').textContent;
        });
        expect(title).to.have.string('Welcome to Puppeteer');
        await page.waitFor('#block-bartik-account-menu .content ul li a');
        await page.click('#block-bartik-account-menu .content ul li a');
        await page.waitFor('input[name=name]');
        await page.type('input[name=name]', 'admin');
        await page.type('input[name=pass]', 'admin');
        await page.click('#edit-submit');
        await page.waitFor('#block-bartik-page-title');
        title = await page.evaluate(() => {
            return document.querySelector('#block-bartik-page-title').textContent;
        });
        expect(title).to.have.string('admin');
    });

    it('going to the site and asserting the title is correct', async() => {
        await page.waitFor('#toolbar-link-system-admin_content')
        await page.click('#toolbar-link-system-admin_content')
        await page.waitFor('#block-seven-local-actions ul li a')
        await page.click('#block-seven-local-actions ul li a')
        await page.waitFor('#block-seven-content ul li:last-child a');
        await page.click('#block-seven-content ul li:last-child a')
        await page.waitFor('input[id=edit-title-0-value]');
        await page.type('input[id=edit-title-0-value]', 'Een nieuwe node')
        await page.click('#edit-submit')
        await page.waitFor('#block-bartik-page-title');
        title = await page.evaluate(() => {
            return document.querySelector('#block-bartik-page-title').textContent;
        });
        expect(title).to.have.string('Een nieuwe node');
        await page.click('#block-bartik-local-tasks nav ul li:last-child a');
        await page.waitFor('#block-seven-page-title');
        title = await page.evaluate(() => {
            return document.querySelector('#block-seven-page-title').textContent;
        });
        expect(title).to.have.string('Are you sure you want to delete the content Een nieuwe node?');
        await page.click('#edit-submit');
    });

    after('logging out and closing the browser', async() => {
        await page.waitFor('#block-bartik-account-menu .content ul li:last-child a');
        await page.click('#block-bartik-account-menu .content ul li:last-child a');
        await browser.close();
    });
})