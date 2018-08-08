let inputData = {
    username: 'qaburner@gmail.com',
    pw: 'Testaccount.1'
}

let TCG = {}
module.exports = {
    before: browser => {
        TCG = browser.page.TCG()
        TCG.navigate()
        browser.maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/QA6B-41
    'Site Navigation': browser => {
        TCG
        .waitForElementVisible('@signInButton', 10000)
        .click('@signInButton')
        .waitForElementVisible('@email', 10000)
        .setValue('@email', inputData.username)
        .setValue('@password', inputData.pw)
        .click('@loginButton')
        .waitForElementPresent('@magicDD', 10000)
        .click('@magicDD')
        .click('@magicDD')
        .waitForElementPresent('@alpha', 5000)
        .click('@logo')
        .waitForElementPresent('@yugiohDD', 5000)
        .click('@yugiohDD')
        .click('@yugiohDD')
        .waitForElementPresent('@pharaoh', 5000)
        .click('@logo')
        .waitForElementPresent('@pokemonDD', 5000)
        .click('@pokemonDD')
        .click('@pokemonDD')
        .waitForElementPresent('@teamRocket', 5000)
        .click('@logo')
        .waitForElementPresent('@cardfightDD', 5000)
        .click('@cardfightDD')
        .click('@cardfightDD')
        .waitForElementPresent('@unite', 5000)
        .click('@logo')
        .waitForElementPresent('@DBSDD', 5000)
        .click('@DBSDD')
        .click('@DBSDD')
        .waitForElementPresent('@power', 5000)
        .click('@logo')
        .waitForElementPresent('@suppliesDD', 5000)
        .click('@suppliesDD')
        .click('@suppliesDD')
        .waitForElementPresent('@accountDD', 5000)
        .click('@accountDD')
        .click('@yourAccountInDD')
        .waitForElementPresent('@welcome', 5000)
        .click('@orderHistory')
        .waitForElementPresent('@my', 5000)
        .click('@messages')
        .waitForElementPresent('@inbox', 5000)
        .click('@collection')
        .waitForElementPresent('@myCollectionTab', 5000)
        .click('@help')
        .waitForElementPresent('@submitARequest', 5000)
    }
}