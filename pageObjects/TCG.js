module.exports = {
    url: 'https://www.tcgplayer.com/',
    elements: {
        //Homepage - DD=DropDown
        homeLogo: 'img[class="site-header__logo"]',
        signInButton: 'a[class="btn btn-light btn--account"]',
        email: 'input[id="Email"]',
        password: 'input[id="Password"]',
        loginButton: 'input[value="LOGIN"]',
        accountDD: 'a[id="account-actions-btn"]',
        yourAccountInDD: {
            selector: '(//a[text()="Your Account"])[1]',
            locateStrategy: 'xpath',
        },
        magicDD: {
            selector: '(//a[text()="Magic"])[1]',
            locateStrategy: 'xpath',
        },
        yugiohDD: {
            selector: '(//a[text()="YuGiOh"])',
            locateStrategy: 'xpath',
        },
        pokemonDD: {
            selector: '(//a[text()="Pokemon"])[1]',
            locateStrategy: 'xpath',
        },
        cardfightDD: {
            selector: '(//a[text()="Cardfight"])',
            locateStrategy: 'xpath',
        },
        DBSDD: {
            selector: '(//a[text()="Dragon Ball Super"])[1]',
            locateStrategy: 'xpath',
        },
        suppliesDD: {
            selector: '(//a[text()="Supplies"])[2]',
            locateStrategy: 'xpath',
        },
        
        //Header Items
        logo: 'img[src="/Content/images/new-logo.png"]',
        orderHistory: {
            selector: '(//a[text()="Order History"])',
            locateStrategy: 'xpath',
        },
        messages: {
            selector: '(//a[text()="Messages"])',
            locateStrategy: 'xpath',
        },
        collection: {
            selector: '(//a[text()="Collection"])',
            locateStrategy: 'xpath',
        },
        help: {
            selector: '(//a[text()="Help"])',
            locateStrategy: 'xpath',
        },

        //Advanced Search Pages
        alpha: 'a[href="/magic/alpha-edition?issingles=true"]',
        pharaoh: 'a[href="https://shop.tcgplayer.com/yugioh/duelist-pack-rivals-of-the-pharaoh"]',
        teamRocket: 'a[href="https://shop.tcgplayer.com/pokemon/team-rocket-returns"]',
        unite: 'a[href="https://shop.tcgplayer.com/cardfight-vanguard/unite-team-q4?ProductType=All"]',
        power: 'a[href="https://shop.tcgplayer.com/dragon-ball-super-ccg/tournament-of-power?ProductType=All"]',

        //Account Homepage
        welcome: 'div[class="account-welcome"]',
        //Order History
        my: 'h2[class="my"]',
        //Messages
        inbox: 'div[id="messageCenterRightContainer"]',
        //Collection
        myCollectionTab: 'a[id="myCollectionTab"]',
        //Help
        submitARequest: 'a[class="submit-a-request"]',
        },
}