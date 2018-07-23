module.exports = {

    elements: {
        header:{
            selector: '#header',
            locateStrategy: 'css selector'
        },
        booksLink: {
            selector: '//div[@id="product-list"]//a[contains(@href,"books")][contains(.,"Books")]',
            locateStrategy: 'xpath'
        },
        cdsLink: {
            selector: '//div[@id="product-list"]//a[contains(@href,"cds")][contains(.,"CDs")]',
            locateStrategy: 'xpath'
        }
    }
};