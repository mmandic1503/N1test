module.exports = {

    elements: {        
        artistSearch: {
            selector: '#main-big-col >* input[name="Artist"]',
            locateStrategy: 'css selector'
        },        
        titleSearch: {
            selector: '#main-big-col >* input[name="Title"]',
            locateStrategy: 'css selector'
        },        
        labelSearch: {
            selector: '#main-big-col >* input[name="Label"]',
            locateStrategy: 'css selector'
        },        
        composerSearch: {
            selector: '#main-big-col >* input[name="Composer"]',
            locateStrategy: 'css selector'
        },
        submitButton: {
            selector: '#main-big-col >* input[type="submit"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        checkCDsForm: function() {
            this.api
                .assert.visible(this.elements.artistSearch.selector)
                .assert.visible(this.elements.titleSearch.selector)
                .assert.visible(this.elements.labelSearch.selector)
                .assert.visible(this.elements.composerSearch.selector)
                .assert.visible(this.elements.submitButton.selector)
        }
    }]
}