'use strict';

const targetPo = require('./po');

describe('Target tests execution', function () {
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });

    fit('launch browser and search for a product', function () {
        targetPo.get();
        browser.driver.manage().window().maximize();
        targetPo.search('adidas');
        targetPo.clickOnSearchButton();
        targetPo.waitForElementToBeClickable(targetPo.SELECTORS.CONTAINER);
        targetPo.openProductCardAtIndex(0);
        targetPo.addToCart();
        expect($(targetPo.SELECTORS.ADD_TO_CART_TEXT).getText()).toBe('Added to cart');
    });

    it('validate the registry', function () {
        let firstName = targetPo.SELECTORS.REGISTRY_FIRST_NAME;
        let lastName = targetPo.SELECTORS.REGISTRY_LAST_NAME;
        let elementToBePresent = element(by.css(targetPo.SELECTORS.REGISTRY_MODAL));

        targetPo.get();
        browser.driver.manage().window().maximize();
        targetPo.clickOnRegistry();
        firstName.click();
        firstName.clear();
        firstName.sendKeys('Harry');

        lastName.click();
        lastName.clear();
        lastName.sendKeys('Styles');

        $(targetPo.SELECTORS.REGISTRY_BUTTON).click().then(function () {
            targetPo.waitForElementToBeClickable(targetPo.SELECTORS.REGISTRY_MODAL);
            expect(elementToBePresent.isPresent()).toBe(true);
        });
    });
});

describe('Forbes tests execution', function () {
    it('launch browser and navigate to sign in page', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://secure.tesco.com/account/en-GB/login?from=/');
        let elem = element(by.name('username'));
        elem.clear();
        elem.sendKeys('killerfaltoos73@gmail.com');
        let elem1 = element(by.name('password'));
        elem1.clear();
        elem1.sendKeys('testUser@10');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(browser.getCurrentUrl()).toContain('https://www.tesco.com/');
    });
});
