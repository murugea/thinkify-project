var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    allScriptsTimeout: 120000,
    getPageTimeout: 180000,
    maxSessions: 1,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['e2e/specs/spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 120000
    },

    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'report'
        })
      );
    }
  };
