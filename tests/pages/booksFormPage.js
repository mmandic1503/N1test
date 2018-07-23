module.exports = {

    elements: {        
        authorSearch: {
            selector: '#main-big-col >* input[name="Author"]',
            locateStrategy: 'css selector'
        },        
        titleSearch: {
            selector: '#main-big-col >* input[name="Title"]',
            locateStrategy: 'css selector'
        },        
        publisherSearch: {
            selector: '#main-big-col >* input[name="Publisher"]',
            locateStrategy: 'css selector'
        },        
        isbnSearch: {
            selector: '#main-big-col >* input[name="ISBN"]',
            locateStrategy: 'css selector'
        },
        submitButton: {
            selector: '#main-big-col >* input[type="submit"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        checkBooksForm: function() {
            this.api
                .assert.visible(this.elements.authorSearch.selector)
                .assert.visible(this.elements.titleSearch.selector)
                .assert.visible(this.elements.publisherSearch.selector)
                .assert.visible(this.elements.isbnSearch.selector)
                .assert.visible(this.elements.submitButton.selector)
        }
    }]
}