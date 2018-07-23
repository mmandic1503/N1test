module.exports = {

    elements: {
        alternative: {
            selector: '#product-list *:nth-child(4)',
            locateStrategy: 'css selector'
        },
        blues: {
            selector: '#product-list *:nth-child(5)',
            locateStrategy: 'css selector'
        },
        childrensMusic: {
            selector: '#product-list *:nth-child(6)',
            locateStrategy: 'css selector'
        },
        classical: {
            selector: '#product-list *:nth-child(7)',
            locateStrategy: 'css selector'
        },
        country: {
            selector: '#product-list *:nth-child(8)',
            locateStrategy: 'css selector'
        },
        danceDJ: {
            selector: '#product-list *:nth-child(9)',
            locateStrategy: 'css selector'
        },
        folk: {
            selector: '#product-list *:nth-child(10)',
            locateStrategy: 'css selector'
        },
        emergingArtists: {
            selector: '#product-list *:nth-child(11)',
            locateStrategy: 'css selector'
        },
        international: {
            selector: '#product-list *:nth-child(12)',
            locateStrategy: 'css selector'
        },
        jazz: {
            selector: '#product-list *:nth-child(13)',
            locateStrategy: 'css selector'
        },
        miscellaneous: {
            selector: '#product-list *:nth-child(14)',
            locateStrategy: 'css selector'
        },
        newAge: {
            selector: '#product-list *:nth-child(15)',
            locateStrategy: 'css selector'
        },
        operaAndVocals: {
            selector: '#product-list *:nth-child(16)',
            locateStrategy: 'css selector'
        },
        pop: {
            selector: '#product-list *:nth-child(17)',
            locateStrategy: 'css selector'
        },
        rapHipHop: {
            selector: '#product-list *:nth-child(18)',
            locateStrategy: 'css selector'
        },
        rAndB: {
            selector: '#product-list *:nth-child(19)',
            locateStrategy: 'css selector'
        },
        soul: {
            selector: '#product-list *:nth-child(20)',
            locateStrategy: 'css selector'
        },
        soundtracks: {
            selector: '#product-list *:nth-child(21)',
            locateStrategy: 'css selector'
        },
        vocalistsAndBroadway: {
            selector: '#product-list *:nth-child(22)',
            locateStrategy: 'css selector'
        },
        world: {
            selector: '#product-list *:nth-child(23)',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        checkProductList: function() {
            this.api
                .assert.visible(this.elements.alternative.selector)
                .assert.visible(this.elements.blues.selector)
                .assert.visible(this.elements.childrensMusic.selector)
                .assert.visible(this.elements.classical.selector)
                .assert.visible(this.elements.country.selector)
                .assert.visible(this.elements.danceDJ.selector)
                .assert.visible(this.elements.folk.selector)
                .assert.visible(this.elements.emergingArtists.selector)
                .assert.visible(this.elements.international.selector)
                .assert.visible(this.elements.jazz.selector)
                .assert.visible(this.elements.miscellaneous.selector)
                .assert.visible(this.elements.newAge.selector)
                .assert.visible(this.elements.operaAndVocals.selector)
                .assert.visible(this.elements.pop.selector)
                .assert.visible(this.elements.rapHipHop.selector)
                .assert.visible(this.elements.rAndB.selector)
                .assert.visible(this.elements.soul.selector)
                .assert.visible(this.elements.soundtracks.selector)
                .assert.visible(this.elements.vocalistsAndBroadway.selector)
                .assert.visible(this.elements.world.selector)
        }
    }]
}