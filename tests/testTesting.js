var home = require('./data/data.json')

module.exports = {
    'Open home page': function (browser) {
        var homePage = browser.page.homePage()

        browser
            .url(home.url)
            .pause(300)

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@header')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')
    },

    'Navigate to Books page': function (browser) {
        var homePage = browser.page.homePage();
        var booksPage = browser.page.booksPage();

        homePage
            .click('@booksLink')

        booksPage
            .assert.title('ACME ECOMM | Books')
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
    },

    'test': function (browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var testPage = browser.page.testPage()

        booksSideMenu
            .click('@biographies')

        testPage
            .assert.title('ACME ECOMM | Books » Biographies')
            .checkBiographies()
    }
}