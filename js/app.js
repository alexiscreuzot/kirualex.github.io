'use strict';

var myApp = angular.module('myApp', ['ng', 'seo']);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider
  .when('/lab',{
    controller:'LabController',
    templateUrl:'partials/lab.html'
  })
  .when('/scribbles',{
    controller:'ScribblesController',
    templateUrl:'partials/scribbles.html'
  })
  .when('/scribble/:scribbleId',{
    controller:'ScribblesController',
    templateUrl:'partials/scribble.html'
  })
  .when('/contact',{
    controller:'MainController',
    templateUrl:'partials/contact.html'
  })
  .when('/',{
    controller:'MainController',
    templateUrl:'partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});