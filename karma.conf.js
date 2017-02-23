// Karma configuration
// Generated on Wed Feb 22 2017 22:45:17 GMT+0300 (+03)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // libs
        'assets/libs/jquery.js',
        'assets/libs/lodash.js',
        'assets/libs/angular.js',
        'assets/libs/angular-messages.js',
        'assets/libs/restangular.js',
        'assets/libs/angular-ui-router.js',
        'assets/libs/ngStorage.js',
        'node_modules/angular-mocks/angular-mocks.js',

        // app
        'app/app.module.js',
        'app/app.config.js',
        'app/shared/*.js',
        'app/shared/**/*.js',
        'app/components/**/*.js'

        // tests
        //'app/components/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
