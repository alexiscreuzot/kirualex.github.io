'use strict';

myApp.controller('AppController', function($scope, $location) {

  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };

});