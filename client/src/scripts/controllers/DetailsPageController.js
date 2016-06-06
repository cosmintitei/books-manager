angular.module('books-manager').controller('DetailsPageController', [
    '$location', '$routeParams',
    'BooksService',
    function ($location, $routeParams, booksService) {
        'use strict';

        var self = this;

        this.data = booksService.getData();
        booksService.getBook($routeParams.bookId);
    }]);
