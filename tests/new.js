module.exports = {
    'open books page': function (browser) {
        browser
            .url('http://www.acme.qualityhouse.bg/build3/index.php?page=books')
    },
    'open page': function (browser) {
        var sideMenu = browser.page.booksSideMenu()

        sideMenu
            .click('@art')
        
        browser.pause(2000)
    },
    'check page': function (browser) {
        var booksData = browser.page.booksDataPage()

        
        booksData
            .checkBooks()
    }
}