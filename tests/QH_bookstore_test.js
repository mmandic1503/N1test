module.exports = {
    'step one - Go to Login page': function(browser) {        
        browser
            .url('http://www.acme.qualityhouse.bg/build3/index.php')
            .waitForElementVisible('body[id="bdy"]', 3000)
            .assert.title('ACME ECOMM | Home')
            .waitForElementVisible('#main-menu > a:nth-child(6)', 3000)
            .click('#main-menu > a:nth-child(6)')
            .waitForElementVisible('body', 3000)
            .click('form[name="loginform"] > input[value="Login"]')
    },

    'step two - Login to app with empty username and password fields': function(browser) {
        browser
            .waitForElementVisible('body', 3000)
            .assert.visible('#username')
            .setValue('#username', '')
            .assert.visible('form[name="loginform"] > input[name="userpass"]')
            .setValue('form[name="loginform"] > input[name="userpass"]', '')
            .click('#main-big-col * > input[type="submit"]')
    },
    'step three - Login to app with wrong username and valid password': function(browser) {
        browser
            .waitForElementVisible('body', 3000)
            .assert.visible('#username')
            .setValue('#username', 'Error')
            .assert.visible('form[name="loginform"] > input[name="userpass"]')
            .setValue('form[name="loginform"] > input[name="userpass"]', 'stpass1')
            .click('#main-big-col * > input[type="submit"]')
    },

    'step four - Login to app with correct username and wrong password': function(browser) {
        browser
            .waitForElementVisible('body', 3000)
            .assert.visible('#username')
            .setValue('#username', 'student1')
            .assert.visible('form[name="loginform"] > input[name="userpass"]')
            .setValue('form[name="loginform"] > input[name="userpass"]', 'error1')
            .click('#main-big-col * > input[type="submit"]')
    },
    
    'step five - Login to app with wrong credentials, both username and password': function(browser) {
        browser
            .waitForElementVisible ('body', 3000)
            .assert.visible('#username')
            .setValue('#username', 'Error')
            .assert.visible('form[name="loginform"] > input[name="userpass"]')
            .setValue('form[name="loginform"] > input[name="userpass"]', 'error1')
            .click('#main-big-col * > input[type="submit"]')
    },

    'step six - Login to app with correct credentials': function(browser) {
        browser
        /*    .waitForElementVisible ('body', 2000)
            .assert.visible('#username')
            .setValue('#username', 'student1')
            .assert.visible('form[name="loginform"] > input[name="userpass"]')
            .setValue('form[name="loginform"] > input[name="userpass"]', 'stpass1')
            .click('#main-big-col * > input[type="submit"]') */
    },

    'step seven - Perform search on Books by selected criteria [Author]': function(browser) {
        browser
            .waitForElementVisible('body[id="bdy"]', 2000)
            .assert.visible('#product-list > div > b > a')
            .click('#product-list > div > b > a')
            .waitForElementVisible('body[id="bdy"]', 2000)
            .assert.visible('form[name="search"] * > input[name="Author"]')
            .setValue('form[name="search"] * > input[name="Author"]', 'Penny Wize')
            .assert.visible('#main-big-col * > input[type="submit"]') // there's a typo inside this element ("value" it is spelled as "valie") so in this selector I've used type attribute
            .click('#main-big-col * > input[type="submit"]')
    },

    'step eight - Add one item to the basket' : function (browser) {
        browser
            .waitForElementVisible('#product-list', 2000)
            .assert.containsText('#basket', '0') // checking if original state of cart is 0
            .assert.visible('#product-list > div > div > a')
            .click('#product-list > div > div > a')
            .waitForElementVisible('body[id="bdy"]', 2000)
    },

    'step nine - Assert that basket item indicator is increased' : function (browser) {
        browser
            .waitForElementVisible('#basket', 2000)
            .assert.containsText('#basket', '1') // checking if state of cart has been updated to 1 after product add
    },

    'step ten - open basket and check values' : function (browser) {
        browser
            .click('#basket > a')
            .waitForElementVisible('body[id="bdy"]', 2000)
            .assert.visible('#basket-details')
            .assert.containsText('#basket-details * > td:nth-child(3)', '11.99') // checking if product price value is 11.99
            .assert.containsText('#basket-details * > td:nth-child(4)', '1') // checking if quantity value is 1
            .assert.containsText('#basket-details * > td:nth-child(5) > b', '11.99') // checking if subtotal price value is 11.99
            .assert.containsText('#basket-details * > td.basket-total > b', '11.99') // checking if total price value is 11.99
    },

    'step eleven - increase quantity of products and assert if displayed value is correct' : function (browser) {
        browser
            .assert.visible('#basket-details * > a:nth-child(2)')
            .click('#basket-details * > a:nth-child(2)')
            .click('#basket-details * > a:nth-child(2)') // increasing quantity of products in cart 2x
            .assert.containsText('#basket-details * > td:nth-child(4)', '3') // checking if quantity value has been updated to 3
    },

    'step twelve - Assert that displayed total price per book is calculated properly' : function (browser) {
        browser
            .assert.containsText('#basket-details * > td:nth-child(3)', '11.99') // checking if product price value is 11.99
            .assert.containsText('#basket-details * > td:nth-child(5) > b', '35.97') // checking if subtotal price value is updated to be 35.97 after quantity increased
            .assert.containsText('#basket-details * > td.basket-total > b', '35.97') // checking if total price value is updated to be 35.97 after quantity increased
    },

    'step thirteen - Logout' : function (browser) {
        browser
            .waitForElementVisible('#main-menu > a:nth-child(6)', 2000)
            .click('#main-menu > a:nth-child(6)')
            .waitForElementVisible('body[id="bdy"]', 2000)
            .assert.visible('#main-big-col > a')
            .click('#main-big-col > a')
    },

    'step fourteen - Assert that basket indicator is reset' : function (browser) {
        browser
            .waitForElementVisible('body[id="bdy"]', 2000)
            .assert.visible('#basket')
            .assert.containsText('#basket', '0')
            .end()
    }
}
