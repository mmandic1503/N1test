var books = require('../data/books.json')
var x = '';

module.exports = {

    elements: {
        productList: {
            selector: '#product-list',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        readJson: function() {
            for (i in books.biographies) {
                x += books.biographies[i] + '\n';
                for (j in books.biographies[i].title) {
                    x += books.biographies[i].title[j];
                }
            }
            console.log(x);
        }
    }]
}
