const selectorUtils = require('./selector-utils');

  const SELECTORS = {
       SEARCH_BUTTON: selectorUtils.getSelectorFromDataTest('btnSearch'),
       CONTAINER: selectorUtils.getSelectorFromDataTest('productGridContainer'),
       PRODUCT_CARD: selectorUtils.getSelectorFromDataTest('product-card-default'),
       CAROUSEL_WRAPPER: selectorUtils.getSelectorFromDataTest('carousel-wrapper'),
       ADD_TO_CART: selectorUtils.getSelectorFromDataTest('addToCartButton'),
       ADD_TO_CART_MODAL: selectorUtils.getSelectorFromDataTest('addToCartModal'),
       SEARCH_INPUT: selectorUtils.getSelectorFromDataName('SearchInput'),
       CATEGORIES: selectorUtils.getSelectorFromDataMenu('CATEGORIES'),
       ACCOUNT: selectorUtils.getSelectorFromDataMenu('ACCOUNT'),
       ADD_TO_CART_TEXT: 'div.styles__AddedToCart-mrt3qe-0 > h2',
       CATEGORIES_MENU: '[id="categoriesMenu"]',
       CATEGORY_NAVIGATION: selectorUtils.getSelectorFromDataTest('navigation-link'),
       CATEGORY_NAVIGATION_BUCKET: selectorUtils.getSelectorFromDataTest('navLink-bucketItem'),
       NAV_HEADER: selectorUtils.getSelectorFromDataTest('headerNav'),
       REGISTRY: '[data-lnk="gnav_registries"]',
       REGISTRY_FIRST_NAME: element(by.id('registrySearchFirstName')),
       REGISTRY_LAST_NAME: element(by.id('registrySearchLastName')),
       REGISTRY_BUTTON: '.styles__SearchButton-hsogak-2',
       REGISTRY_MODAL: '.styles__RegistryListingContainer-yo73fk-7'
  }

  function get() {
      browser.get('https://www.target.com/');
  }

  function waitForVisibilityOf(selector, optionalTimeout) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($(selector)), optionalTimeout);
  }

  function waitForElementToBeClickable(selector, optionalTimeout) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable($(selector)), optionalTimeout);
  }

  function search(input) {
      $(SELECTORS.SEARCH_INPUT).click();
      let elem = element(by.css('input[id="search"]'));
      elem.clear();
      elem.sendKeys(input);
  }

  function clickOnSearchButton() {
      $$(SELECTORS.SEARCH_BUTTON).click();
  }

  function openProductCardAtIndex(index) {
    let list = element.all(by.css(SELECTORS.PRODUCT_CARD));
    list.get(index).click();
    waitForVisibilityOf(SELECTORS.CAROUSEL_WRAPPER);
  }

  function addToCart() {
    waitForElementToBeClickable(SELECTORS.ADD_TO_CART);
    $$(SELECTORS.ADD_TO_CART).click();
    waitForVisibilityOf(SELECTORS.ADD_TO_CART_MODAL);
  }

  function clickOnRegistry() {
    waitForVisibilityOf(SELECTORS.REGISTRY);
    $(SELECTORS.REGISTRY).click();
  }

  module.exports = {
    SELECTORS,
    get,
    search,
    clickOnSearchButton,
    openProductCardAtIndex,
    waitForElementToBeClickable,
    addToCart,
    clickOnRegistry
}

