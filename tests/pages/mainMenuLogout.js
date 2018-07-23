module.exports = {
    
    elements: {
        homeButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"Home")]',
            locateStrategy: 'xpath'
        },
        booksButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"Books")]',
            locateStrategy: 'xpath'
        },
        cdsButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"CDs")]',
            locateStrategy: 'xpath'
        },
        basketButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"Basket")]',
            locateStrategy: 'xpath'
        },
        registerButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"Register")]',
            locateStrategy: 'xpath'
        },
        loginButton: {
            selector: '//*[@id="main-menu"]/a[contains(.,"Login")]',
            locateStrategy: 'xpath'
        }
    }
};