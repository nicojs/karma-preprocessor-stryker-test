
module.exports = function (config) {
    config.set({

        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '*.*'
        ],

        preprocessors: {
            "*.html": ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            moduleName: "ngHtml2JsTemplates"
        },

        browsers: ['PhantomJS'],
        singleRun: true
    });
}

