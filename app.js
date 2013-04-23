var myApp = angular.module('myApp', []);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/resume',{
    controller:'SimpleController',
    templateUrl:'partials/view1.html'
  })
  .when('/thoughts',{
    controller:'SimpleController',
    templateUrl:'partials/view2.html'
  })
  .otherwise({redirectTo:'/'});
});

// define controllers
var controllers = {};
controllers.SimpleController = function($scope){
  $scope.names = ['one','two','three'];
  $scope.names2 = ['blob','blib','rap'];
};

// declare controller to myApp
myApp.controller(controllers);