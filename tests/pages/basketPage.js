module.exports = {

    elements: {
        shoppingBasket: {
            selector: '#main-big-col',
            locateStrategy: 'css selector'
        },
        basketDetails: {
            selector: '#basket-details',
            locateStrategy: 'css selector'
        },
        checkoutButton: {
            selector: '//*[@id="main-big-col"]/div[2]/a',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        checkBasket: function() {

            this.api
                .elements('css selector', this.elements.basketDetails.selector, function(result) {
                    if (result.status > 0) {
                        this.api
                            .assert.visible.basketDetails.selector
                            .assert.visible.checkoutButton.selector;
                    } else {
                        this.expect.element('#main-big-col').text.to.contain('The Shopping Basket is empty!');
                    }
                })
        }
    }]
};