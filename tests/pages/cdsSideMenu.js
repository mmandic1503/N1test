module.exports = {

    elements: {
        alternative: {
            selector: '#side-menu *:nth-child(2)',
            locateStrategy: 'css selector'
        },
        blues: {
            selector: '#side-menu *:nth-child(3)',
            locateStrategy: 'css selector'
        }, 
        childrensMusic: {
            selector: '#side-menu *:nth-child(4)',
            locateStrategy: 'css selector'
        },
        classical: {
            selector: '#side-menu *:nth-child(5)',
            locateStrategy: 'css selector'
        },
        country: {
            selector: '#side-menu *:nth-child(6)',
            locateStrategy: 'css selector'
        },
        danceDJ: {
            selector: '#side-menu *:nth-child(7)',
            locateStrategy: 'css selector'
        },
        folk: {
            selector: '#side-menu *:nth-child(8)',
            locateStrategy: 'css selector'
        },
        emergingArtists: {
            selector: '#side-menu *:nth-child(9)',
            locateStrategy: 'css selector'
        },
        international: {
            selector: '#side-menu *:nth-child(10)',
            locateStrategy: 'css selector'
        },
        jazz: {
            selector: '#side-menu *:nth-child(11)',
            locateStrategy: 'css selector'
        },
        miscellaneous: {
            selector: '#side-menu *:nth-child(12)',
            locateStrategy: 'css selector'
        },
        newAge: {
            selector: '#side-menu *:nth-child(13)',
            locateStrategy: 'css selector'
        },
        operaAndVocals: {
            selector: '#side-menu *:nth-child(14)',
            locateStrategy: 'css selector'
        },
        pop: {
            selector: '#side-menu *:nth-child(15)',
            locateStrategy: 'css selector'
        },
        rapHipHop: {
            selector: '#side-menu *:nth-child(16)',
            locateStrategy: 'css selector'
        },
        rAndB: {
            selector: '#side-menu *:nth-child(17)',
            locateStrategy: 'css selector'
        },
        soul: {
            selector: '#side-menu *:nth-child(18)',
            locateStrategy: 'css selector'
        },
        soundtracks: {
            selector: '#side-menu *:nth-child(19)',
            locateStrategy: 'css selector'
        },
        vocalistsAndBroadway: {
            selector: '#side-menu *:nth-child(20)',
            locateStrategy: 'css selector'
        },
        world: {
            selector: '#side-menu *:nth-child(21)',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        checkSideMenu: function() {
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