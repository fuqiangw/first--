/**
 * Created by Administrator on 2016/10/27.
 */
var md = angular.module("app1.booksContent",[]);

md.controller('BooksContentController',
    ['$scope','URLConfig','$routeParams','$http','$rootScope','$route',
        function($scope,URLConfig,$routeParams,$http,$rootScope,$route) {
            var appurl = URLConfig.appURL;
            var bookId = $routeParams.bookId;
            var url = appurl + 'subject/' + bookId + "?callback=bookContentCallBack";
            $http.jsonp(url).error(function () {});
            window.bookContentCallBack = function (jsonData) {
                $scope.book = jsonData;
            }
        }
    ]);