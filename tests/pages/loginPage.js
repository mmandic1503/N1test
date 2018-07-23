var user = require('../data/data.json');
var pass = require('../data/data.json');
var emptyUser = require('../data/data.json');
var emptyPass = require('../data/data.json');
var errorUser = require('../data/data.json');
var errorPass = require('../data/data.json');

module.exports = {

    elements: {
        loginUsername: {
            selector: '#username',
            locateStrategy: 'css selector'
        },
        loginPassword: {
            selector: 'form[name="loginform"] > input[name="userpass"]',
            locateStrategy: 'css selector'
        },
        loginButton: {
            selector: 'form[name="loginform"] > input[type="submit"]',
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        emptyLogin: function() {
            this.api
                .waitForElementVisible('#bdy', 2000)
                .setValue(this.elements.loginUsername.selector, emptyUser.userEmpty)
                .setValue(this.elements.loginPassword.selector, emptyPass.passEmpty)
                .click(this.elements.loginButton.selector)
        },

        dontLogin: function() {
            this.api
                .waitForElementVisible('#bdy', 2000)
                .setValue(this.elements.loginUsername.selector, errorUser.userError)
                .setValue(this.elements.loginPassword.selector, errorPass.passError)
                .click(this.elements.loginButton.selector)
        },

        doLogin: function() {

            this.api
                .waitForElementVisible('#bdy', 2000)
                .setValue(this.elements.loginUsername.selector, user.loginUser)
                .setValue(this.elements.loginPassword.selector, pass.loginPass)
                .click(this.elements.loginButton.selector)
        }
    }]
};