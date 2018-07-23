var home = require('./data/data.json');

module.exports = {

    'Open home page': function(browser) {
        var homePage = browser.page.homePage();
        
        browser
            .url(home.url)
            .pause(1000)

        homePage
            .assert.title('ACME ECOMM | Home')
            .assert.visible('@header')
            .assert.visible('@booksLink')
            .assert.visible('@cdsLink')
    },

    'Check if all elements of header are always present if User is NOT logged in': function(browser) {
        var headerLogout = browser.page.headerLogout();

        headerLogout
            .assert.visible('@logo')
            .assert.visible('@mainMenu')
            .assert.visible('@basket')
    },

    'Check all elements are present in main menu if User is NOT logged in': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();

        mainMenuLogout
            .assert.visible('@homeButton')
            .assert.visible('@booksButton')
            .assert.visible('@cdsButton')
            .assert.visible('@basketButton')
            .assert.visible('@registerButton')
            .assert.visible('@loginButton')
    },

    'Click on Books button in header': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var booksPage = browser.page.booksPage();

        mainMenuLogout
            .click('@booksButton')
            .waitForElementVisible('#bdy', 2000)

        booksPage
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
    },

    'Click on CDs button in header': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var cdsPage = browser.page.cdsPage();

        mainMenuLogout
            .click('@cdsButton')
            .waitForElementVisible('#bdy', 2000)

        cdsPage
            .assert.visible('@sideMenu')
            .assert.visible('@productList')
            .assert.visible('@searchForm')
    },

    'Click on Register button': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var registerPage = browser.page.registerPage();
        
        mainMenuLogout
            .click('@registerButton')
            .waitForElementVisible('#bdy', 2000)

        registerPage
            .expect.element('#main-big-col')
            .text.to.contain('The registration of new customers is suspended!')
    },

    'Click on Basket button': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var basketPage = browser.page.basketPage();

        mainMenuLogout
            .click('@basketButton')
            .waitForElementVisible('#bdy', 2000)

        basketPage
            .checkBasket()
    },

    'Login to app without filling up user and pass fields': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var loginPage = browser.page.loginPage();

        mainMenuLogout
            .click('@loginButton')

        loginPage
            .emptyLogin();
    },

    'Login to app with wrong username and password': function(browser) {
        var loginPage = browser.page.loginPage();

        loginPage
            .dontLogin();
    },

    'Login to app': function(browser) {
        var mainMenuLogout = browser.page.mainMenuLogout();
        var loginPage = browser.page.loginPage();

        mainMenuLogout
            .click('@loginButton')

        loginPage
            .doLogin();

        browser.end()
    }
}