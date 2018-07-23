var books = require('../data/books.json')
var x = '';

module.exports = {

    elements: {
        productList: {
            selector: '#main-big-col',
            locateStrategy: 'css selector'
        }
    },

    commands: [{
        checkBiographies: function () {
            this.api
                .elements('css selector', this.elements.productList.selector, function (result) {
                    if (result.value.lenght > 0) {
                        for (i in books.biographies) {
                            x += books.biographies[i].title = '\n';
                            for (j in books.biographies.title) {
                                x += books.biographies[i].title[j];
                            }
                        }
                        console.log(x);
                    } else {
                        this.expect.element('#main-big-col').text.to.contain('There are no products in the category');
                    }
                })
        }
    }]   
}