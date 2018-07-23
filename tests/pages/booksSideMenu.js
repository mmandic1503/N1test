module.exports = {

    elements: {
        art: {
            selector: '#side-menu *:nth-child(2)',
            locateStrategy: 'css selector'
        },
        biographies: {
            selector: '#side-menu *:nth-child(3)',
            locateStrategy: 'css selector'
        }, 
        childrensBooks: {
            selector: '#side-menu *:nth-child(4)',
            locateStrategy: 'css selector'
        },
        finance: {
            selector: '#side-menu *:nth-child(5)',
            locateStrategy: 'css selector'
        },
        computers: {
            selector: '#side-menu *:nth-child(6)',
            locateStrategy: 'css selector'
        },
        cooking: {
            selector: '#side-menu *:nth-child(7)',
            locateStrategy: 'css selector'
        },
        entertainment: {
            selector: '#side-menu *:nth-child(8)',
            locateStrategy: 'css selector'
        },
        mindBody: {
            selector: '#side-menu *:nth-child(9)',
            locateStrategy: 'css selector'
        },
        history: {
            selector: '#side-menu *:nth-child(10)',
            locateStrategy: 'css selector'
        },
        hobbies: {
            selector: '#side-menu *:nth-child(11)',
            locateStrategy: 'css selector'
        },
        homeGarden: {
            selector: '#side-menu *:nth-child(12)',
            locateStrategy: 'css selector'
        },
        horror: {
            selector: '#side-menu *:nth-child(13)',
            locateStrategy: 'css selector'
        },
        literature: {
            selector: '#side-menu *:nth-child(14)',
            locateStrategy: 'css selector'
        },
        mystery: {
            selector: '#side-menu *:nth-child(15)',
            locateStrategy: 'css selector'
        },
        nonFiction: {
            selector: '#side-menu *:nth-child(16)',
            locateStrategy: 'css selector'
        },
        proffesional: {
            selector: '#side-menu *:nth-child(17)',
            locateStrategy: 'css selector'
        },
        reference: {
            selector: '#side-menu *:nth-child(18)',
            locateStrategy: 'css selector'
        },
        religion: {
            selector: '#side-menu *:nth-child(19)',
            locateStrategy: 'css selector'
        },
        science: {
            selector: '#side-menu *:nth-child(20)',
            locateStrategy: 'css selector'
        },
        scienceFiction: {
            selector: '#side-menu *:nth-child(21)',
            locateStrategy: 'css selector'
        },
        sports: {
            selector: '#side-menu *:nth-child(22)',
            locateStrategy: 'css selector'
        },
        travel: {
            selector: '#side-menu *:nth-child(23)',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        checkSideMenu: function() {
            this.api
                .assert.visible(this.elements.art.selector)
                .assert.visible(this.elements.biographies.selector)
                .assert.visible(this.elements.childrensBooks.selector)
                .assert.visible(this.elements.finance.selector)
                .assert.visible(this.elements.computers.selector)
                .assert.visible(this.elements.cooking.selector)
                .assert.visible(this.elements.entertainment.selector)
                .assert.visible(this.elements.mindBody.selector)
                .assert.visible(this.elements.history.selector)
                .assert.visible(this.elements.hobbies.selector)
                .assert.visible(this.elements.homeGarden.selector)
                .assert.visible(this.elements.horror.selector)
                .assert.visible(this.elements.literature.selector)
                .assert.visible(this.elements.mystery.selector)
                .assert.visible(this.elements.nonFiction.selector)
                .assert.visible(this.elements.proffesional.selector)
                .assert.visible(this.elements.reference.selector)
                .assert.visible(this.elements.religion.selector)
                .assert.visible(this.elements.science.selector)
                .assert.visible(this.elements.scienceFiction.selector)
                .assert.visible(this.elements.sports.selector)
                .assert.visible(this.elements.travel.selector)
        }
    }]
}