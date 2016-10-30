/**
 * Created by Administrator on 2016/10/27.
 */
var app1 = angular.module('myApp',[
    "ngRoute",
    "app1.booksList",
    "app1.booksContent",
    "ui.bootstrap"
]);

//创建指令

app1.directive("selectLink",[function () {
    console.log("show");
    var item = [];
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            item.push(element);
            element.bind("click", function (e) {
                item.forEach(function (item) {
                    if(item === element){
                        item.parent().addClass("active");
                    }else{
                        item.parent().removeClass("active");
                    }
                })
            })
        }
    }
}]);

//配置路由
app1.config(["$routeProvider",function($routeProvider){
     console.log(1);
    $routeProvider.when('/1003078',{
        controller:'BooksListController',
        templateUrl:'books_list.html'
    }).when('', {
        controller: 'BooksContentController',
        templateUrl: 'books_content.html'
    }).otherwise({
        redirectTo: '/1003078'
    })
}]);

app1.constant('URLConfig',{
    //page_size:20,
    appURL:'https://api.douban.com/v2/book/'
});