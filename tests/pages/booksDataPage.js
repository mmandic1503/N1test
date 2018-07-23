var books = require('../data/books.json');
module.exports = {
    elements: {
        productList: {
            selector: '#product-list',
            locateStrategy: 'css selector'
        },
        error: {
            selector: '#product-list > [class=err]',
            locateStrategy: 'css selector'
        }
    },

    commands: [{
        checkBooks: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function(result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.art) {
                            x += books.art[i].title;
                            x+="\n";
                       }
                        console.log(x);
                    }
                }) 
        }
    }]
}