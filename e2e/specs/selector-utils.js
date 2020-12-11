'use strict';

function getSelectorFromDataTest(dataTest) {
    return `[data-test="${dataTest}"]`;
}

function getSelectorFromDataName(dataName) {
    return `[data-name="${dataName}"]`;
}

function getSelectorFromDataMenu(dataMenu) {
    return `[data-menu="${dataMenu}"]`;
}

module.exports = {
    getSelectorFromDataTest,
    getSelectorFromDataName,
    getSelectorFromDataMenu
}
