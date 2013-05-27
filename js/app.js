'use strict';

var myApp = angular.module('myApp', ['ng', 'seo']);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider
  .when('/lab',{
    controller:'MainController',
    templateUrl:'partials/lab.html'
  })
  .when('/scribbles',{
    controller:'MainController',
    templateUrl:'partials/scribbles.html'
  })
  .when('/scribble/:id',{
    controller:'MainController',
    templateUrl:'partials/scribble.html'
  })
  .when('/contact',{
    controller:'MainController',
    templateUrl:'partials/contact.html'
  })
  .when('/admin',{
    controller:'MainController',
    templateUrl:'partials/admin.html'
  })
  .when('/',{
    controller:'MainController',
    templateUrl:'partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});