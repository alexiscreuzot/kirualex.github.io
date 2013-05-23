'use strict';

var myApp = angular.module('myApp', []);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/lab',{
    controller:'MyController',
    templateUrl:'partials/lab.html'
  })
  .when('/thoughts',{
    controller:'MyController',
    templateUrl:'partials/thoughts.html'
  })
  .when('/',{
    controller:'MyController',
    templateUrl:'partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});