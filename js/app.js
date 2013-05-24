'use strict';

var myApp = angular.module('myApp', []);

// routes
myApp.config(function ($routeProvider,$locationProvider){
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
  .when('/contact',{
    templateUrl:'partials/contact.html'
  })
  .when('/admin',{
    templateUrl:'partials/admin.html'
  })
  .when('/',{
    templateUrl:'partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});