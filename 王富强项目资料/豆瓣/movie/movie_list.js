/**
 * Created by Administrator on 2016/10/26.
 */
var mlmodule = angular.module("app.movieList",[]);


mlmodule.controller('MovieListController',
    ['$scope','URLConfig','$routeParams','$http','$rootScope','$route',
        function($scope,URLConfig,$routeParams,$http,$rootScope,$route,$watch){


            var count = URLConfig.page_size || 20;
            var appurl = URLConfig.appURL;


            var type = $routeParams.type || 'in_theaters';
            var page = $routeParams.page || 1;

            $scope.currentPage = page;
            $scope.type = type;
            $scope.loading = true;
            $scope.size = count;

            var url = appurl + type +'?count='+ count + "&start=" + page + '&callback=movieListCallBack';

            console.log(url);
            $http.jsonp(url).error(function(){});

            window.movieListCallBack = function(jsonData){
                //console.log("faf");
                console.log(jsonData);

                $scope.title = jsonData.title;
                $scope.total = jsonData.total;
                $scope.movies = jsonData.subjects;

                $scope.loading = false;
            };

            $scope.$watch('currentPage',function(newValue,oldValue,$scope){
                console.log("第"+newValue+"页");
                console.log("第"+oldValue+"页");

                //if(newValue !== oldValue){
                //    $scope.updateParams({
                //        page:newValue
                //    })
                //}
                $scope.previous = function () {
                    $scope.currentPage = Number($scope.currentPage)-1;
                };
                $scope.next = function () {
                    $scope.currentPage = Number($scope.currentPage)+1;
                };
                if(newValue < 1){
                    newValue = 1;
                    oldValue = 1;
                }else if(newValue > parseInt($scope.total / 20)){
                    newValue = parseInt($scope.total / 20);
                    oldValue = parseInt($scope.total / 20);
                }
                if(newValue !== oldValue){
                    $route.updateParams({
                        page:newValue
                    })
                }
            })


        }]);