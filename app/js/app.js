'use strict';

var myApp = angular.module('myApp', ['ng', 'seo']);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider
  .when('/lab',{
    controller:'LabController',
    templateUrl:'app/partials/lab.html'
  })
  .when('/scribbles',{
    controller:'ScribblesController',
    templateUrl:'app/partials/scribbles.html'
  })
  .when('/scribble/:slug',{
    controller:'ScribblesController',
    templateUrl:'app/partials/scribble.html'
  })
  .when('/contact',{
    controller:'MainController',
    templateUrl:'app/partials/contact.html'
  })
  .when('/',{
    controller:'MainController',
    templateUrl:'app/partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});