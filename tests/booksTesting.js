var home = require('./data/data.json')

module.exports = {
    'Open home page': function(browser) {
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

    'Navigate to Books page': function(browser) {
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

    'Check Art section in Books': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var booksProductPage = browser.page.booksProductPage()

        booksSideMenu
            .click('@art')
            
        booksProductPage
            .assert.title('ACME ECOMM | Books » Art')
            .checkArt()
    },
    
    'Check Biographies in Books': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var booksProductPage = browser.page.booksProductPage()

        booksSideMenu
            .click('@biographies')
        
        booksProductPage
            .assert.title('ACME ECOMM | Books » Biographies')
            .checkBiographies()
    },

    'Check Childrens Books in Books page': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var booksProductPage = browser.page.booksProductPage()

        booksSideMenu
            .click('@childrensBooks')
//
        browser
            .getTitle(function(title) {
                this.assert.ok(title.includes("Children’s books"));
        })

        booksProductPage
            .checkChildrenBooks()
    },

    'Check Finance books in Books page': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var booksProductPage = browser.page.booksProductPage()

        booksSideMenu
            .click('@finance')

        browser
            .assert.title('ACME ECOMM | Books » Finance')
    },

    'Check Horror books': function(browser) {
        var booksSideMenu = browser.page.booksSideMenu()
        var booksProductPage = browser.page.booksProductPage()

        booksSideMenu
            .click('@horror')

        browser
            .getTitle(function(title) {
                this.assert.ok(title.includes("Horror"));
        })

        booksProductPage
            .checkHorror()
    }
}
