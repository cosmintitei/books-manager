(function () {
    'use strict';

    // application module
    angular.module('books-manager', [
        // Core Angular dependency
        'ngRoute',
        'ngMaterial'
    ]).config(['$routeProvider', function routeConfiguration($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ListPageController as listCtrl',
                templateUrl: 'TEMPLATE.booksManager.list-page.html'
            })
            .when('/book-details/:bookId', {
                controller: 'DetailsPageController as detailsCtrl',
                templateUrl: 'TEMPLATE.booksManager.details-page.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
}());
