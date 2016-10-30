/**
 * Created by Administrator on 2016/10/27.
 */
var mlmodule = angular.module("app1.booksList",[]);


mlmodule.controller('BooksListController',
    ['$scope','URLConfig','$routeParams','$http','$rootScope','$route',
        function($scope,URLConfig,$routeParams,$http,$rootScope,$route){

            console.log(10);
            //var count = URLConfig.page_size || 20;
            var appurl = URLConfig.appURL;


            //var type = $routeParams.type || 'get_book';
            //var page = $routeParams.page || 1;
            var id = $routeParams.id || 1003078;

            //$scope.currentPage = page;
            //$scope.type = type;
            //$scope.loading = true;
            //$scope.size = count;


            var url = appurl + id + '?callback=bookListCallBack';

            console.log(url);

            $http.jsonp(url).error(function(){});

            window.bookListCallBack = function(jsonData){
                //console.log("faf");
                console.log(jsonData);

                $scope.title = jsonData.title;
                //$scope.total = jsonData.total;
                $scope.books = jsonData;

                $scope.loading =false;
            };

            //$scope.$watch('currentPage',function(newValue,oldValue){
            //    console.log("第"+newValue+"页");
            //    console.log("第"+oldValue+"页");
            //
            //    if(newValue !== oldValue){
            //        $scope.updateParams({
            //            page:newValue
            //        })
            //    }
            //})


        }]);