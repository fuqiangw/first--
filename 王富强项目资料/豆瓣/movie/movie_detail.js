/**
 * Created by Administrator on 2016/10/26.
 */
var md = angular.module("app.movieDetail",[]);

md.controller('MovieDetailController',
    ['$scope','URLConfig','$routeParams','$http','$rootScope','$route',
        function($scope,URLConfig,$routeParams,$http,$rootScope,$route) {
            var appurl = URLConfig.appURL;
            var movieId = $routeParams.movieId;
            var url = appurl + 'subject/' + movieId + "?callback=movieDetailCallBack";
            $http.jsonp(url).error(function () {});
            window.movieDetailCallBack = function (jsonData) {
                $scope.movie = jsonData;
            }
        }
         ]);