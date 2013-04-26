'use strict';

var myApp = angular.module('myApp', []);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/skills',{
    controller:'MyController',
    templateUrl:'partials/view1.html'
  })
  .when('/thoughts',{
    controller:'MyController',
    templateUrl:'partials/view2.html'
  })
  .otherwise({redirectTo:'/'});
});