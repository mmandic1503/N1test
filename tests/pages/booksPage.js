module.exports = {

    elements: {
        sideMenu: {
            selector: '#side-menu',
            locateStrategy: 'css selector'
        },
        productList: {
            selector: '#product-list',
            locateStrategy: 'css selector'
        },
        searchForm: {
            selector: '//*[@id="main-big-col"]/form',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        checkTitles: function() {

            this.api
                .assert.containsText(this.elements.sideMenu.selector, 'Books')
                .assert.containsText('#main-big-col', 'Books')
                .assert.containsText(this.elements.productList.selector, 'Browse Books by category:')
                .assert.containsText('#main-big-col', 'Or search in Books:')
        }
    }]
};