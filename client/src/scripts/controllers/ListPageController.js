angular.module('books-manager').controller('ListPageController', [
    '$location',
    'BooksService',
    function ($location, booksService) {
        'use strict';

        var self = this;

        this.data = booksService.getData();
        booksService.getBooks();

        this.onBookSelected = function (bookId) {
            $location.path('/book-details/' + bookId);
        };
    }]);
