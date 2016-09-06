angular.module('testModule', ['ngHtml2JsTemplates'])
    .directive('test', function () {
        var a = 1 + 2;
        return {
            templateUrl: 'directive.html',
            scope: {
                title: '='
            }
        };
    });