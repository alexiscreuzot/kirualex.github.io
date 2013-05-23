'use strict';

myApp.controller('AppController', function($scope, $location) {

  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
};

$scope.menus =
[{link:"", icon:"user"},
{link:"lab", icon:"beaker"},
{link:"thoughts", icon:"bookmark"},
{link:"contact", icon:"envelope-alt"}];

});