var home = require('./data/data.json');

module.exports = {

    'Check if home page has been loaded properly': function(browser) {
        var homePage = browser.page.homePage()
        var headerLogout = browser.page.headerLogout()

        browser
            .url(home.url)
            .pause(1000)

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@header')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')

        headerLogout
            .assert.visible('@logo')
            .assert.visible('@mainMenu')
            .assert.visible('@basket')
    },
    
    'Check if Books link navigates to correct page': function(browser) {
        var homePage = browser.page.homePage();
        var booksPage = browser.page.booksPage();
        var mainMenuLogout = browser.page.mainMenuLogout();

        homePage
            .click('@booksLink')
        
        booksPage
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
        
        mainMenuLogout
            .click('@homeButton')
    },

    'Check if CDs link navigatest to correct page': function(browser) {
        var homePage = browser.page.homePage();
        var cdsPage = browser.page.cdsPage();
        
        homePage
            .click('@cdsLink')

        cdsPage
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
            .checkTitles()
        
        browser.end()
    }
}