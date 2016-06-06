angular.module('books-manager').service('BooksService', [
    '$q', '$http',
    function ($q, $http) {
        'use strict';

        var self = this;

        var data = {
            books: [],
            ready: false
        };

        this.getBooks = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8000/api/books'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously when the response is available
                data.books = response.data;
            }, function errorCallback(response) {
                debugger;
                // called asynchronously if an error occurs or server returns response with an error status.
            });
            return;
        };

        this.getBook = function (bookId) {
            $http({
                method: 'GET',
                url: 'http://localhost:8000/api/books/' + bookId
            }).then(function successCallback(response) {
                // this callback will be called asynchronously when the response is available
                data.selectedBook = response.data;
            }, function errorCallback(response) {
                debugger;
                // called asynchronously if an error occurs or server returns response with an error status.
            });
            return;
        };

        this.getData = function () {
            return data;
        }

    }]);
