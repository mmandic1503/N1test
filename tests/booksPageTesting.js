var home = require('./data/data.json')

module.exports = {

    'Open home page': function(browser) {
        var homePage = browser.page.homePage();

        browser
            .url(home.url)
            .pause(500)

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')
    },

    'Navigate to Books page by clicking on home page link': function(browser) {
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

    'Navigate to Books page by clicking on link in main menu': function(browser) {
        var homePage = browser.page.homePage();
        var mainMenuLogout = browser.page.mainMenuLogout();
        var booksPage = browser.page.booksPage();

        mainMenuLogout
            .assert.visible('@homeButton')
            .click('@homeButton')

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@header')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')

        mainMenuLogout
            .assert.visible('@booksButton')
            .click('@booksButton')

        booksPage
            .assert.title('ACME ECOMM | Books')
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
    },

    'Verify that all elements are present in the side menu on the books page': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu();
        
        booksSideMenu
            .checkSideMenu()
    },

    'Verify that all elements are present in the Product List on the books page': function(browser) {
        var booksProductListPage = browser.page.booksProductListPage();

        booksProductListPage
            .checkProductList()
    },

    'Verify that all elements are present in books search form': function(browser) {
        var booksFormPage = browser.page.booksFormPage();

        booksFormPage
            .checkBooksForm()

        browser.end()
    }
}