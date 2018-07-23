var home = require('./data/data.json')

module.exports = {

    'Open home page': function(browser){
    var homePage = browser.page.homePage();

    browser
        .url(home.url)
        .pause(500)

    homePage
        .assert.title('ACME ECOMM | Home')
        .assert.visible('@booksLink')
        .assert.visible('@cdsLink')
    },

    'Navigate to CDs page by clicking on home page link': function(browser) {
        var homePage = browser.page.homePage();
        var cdsPage = browser.page.cdsPage();

        homePage
            .click('@cdsLink')
        
        cdsPage
            .assert.title('ACME ECOMM | CDs')
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
    },

    'Navigate to CDs page by clicking on link in main menu': function(browser) {
        var homePage = browser.page.homePage();
        var mainMenuLogout = browser.page.mainMenuLogout();
        var cdsPage = browser.page.cdsPage();

        mainMenuLogout
            .assert.visible('@homeButton')
            .click('@homeButton')

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@header')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')

        mainMenuLogout
            .assert.visible('@cdsButton')
            .click('@cdsButton')

        cdsPage
            .assert.title('ACME ECOMM | CDs')
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
    },

    'Verify that all elements are present in the side menu on the CDs page': function(browser) {
        var cdsSideMenu = browser.page.cdsSideMenu();
        
        cdsSideMenu
            .checkSideMenu()
    },

    'Verify that all elements are present in the Product List on the CDs page': function(browser) {
        var cdsProductListPage = browser.page.cdsProductListPage();

        cdsProductListPage
            .checkProductList()
    },

    'Verify that all elements are present in CDs search form': function(browser) {
        var cdsFormPage = browser.page.cdsFormPage();

        cdsFormPage
            .checkCDsForm()

        browser.end()
    }   
}