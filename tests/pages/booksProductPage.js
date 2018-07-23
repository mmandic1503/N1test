var books = require('../data/books.json')


module.exports = {

    elements: {
        productList: {
            selector: '#main-big-col',
            locateStrategy: 'css selector'
        },
        title: {
            selector: 'title',
            locateStrategy: 'css selector'
        },
        error: {
            selector: '#product-list > [class=err]',
            locateStrategy: 'css selector'
        }
    },

    commands: [{
        checkArt: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.art) {
                            x += books.art[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkBiographies: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.biographies) {
                            x += books.biographies[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkChildrenBooks: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.childrenBooks) {
                            x += books.childrenBooks[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkFinance: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.finance) {
                            x += books.finance[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkComputers: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.computers) {
                            x += books.computers[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkCooking: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.cookingFoodAndWine) {
                            x += books.cookingFoodAndWine[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkEntertainment: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.entertainment) {
                            x += books.entertainment[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkMindAndBody: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.mindAndBody) {
                            x += books.mindAndBody[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkHistory: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.history) {
                            x += books.history[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkHobbies: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.hobbies) {
                            x += books.hobbies[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkHomeAndGarden: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.homeAndGarden) {
                            x += books.homeAndGarden[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkHorror: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.horror) {
                            x += books.horror[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkLiterature: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.literatureAndFiction) {
                            x += books.literatureAndFiction[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkMistery: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.misteryAndThrillers) {
                            x += books.misteryAndThrillers[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkNonFiction: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.nonFiction) {
                            x += books.nonFiction[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkProfessional: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.professionalAndTechnical) {
                            x += books.professionalAndTechnical[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkReference: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.reference) {
                            x += books.reference[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkReligion: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.religionAndSpirituality) {
                            x += books.religionAndSpirituality[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkScience: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.scienceAndNature) {
                            x += books.scienceAndNature[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkSF: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.scienceFiction) {
                            x += books.scienceFiction[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkSport: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.sportsAndOutdoors) {
                            x += books.sportsAndOutdoors[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        },
        checkTravel: function () {
            this.api
                .elements('css selector', this.elements.error.selector, function (result) {
                    if (result.value.length > 0) {
                        this.assert.cssClassPresent(this.elements.error.selector, 'err');
                        console.log('No products!')
                    } else {
                        var x = '';

                        for (i in books.travel) {
                            x += books.travel[i].title;
                            x += "\n";
                        }
                        console.log(x);
                    }
                })
        }
    }]
}