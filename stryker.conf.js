module.exports = function (config) {
    config.set({
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'directive.html',
            { pattern: 'directive.js', mutated: true, included: true },
            'directiveSpec.js'
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        reporter: ['clear-text', 'progress'],
        logLevel: 'trace',
        karmaConfig: {
            preprocessors: {
                "*.html": ["ng-html2js"]
            },

            ngHtml2JsPreprocessor: {
                moduleName: "ngHtml2JsTemplates"
            },
        }
    });
}