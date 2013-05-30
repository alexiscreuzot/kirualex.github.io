'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope, $http, $routeParams){

    $scope.perso = {
        mail:"alexis.creuzot@gmail.com",
        github:"https://github.com/kirualex",
        stack_overflow:"http://stackoverflow.com/users/421786/kirualex",
        hn:"https://news.ycombinator.com/user?id=kirualex",
        grooveshark:"http://grooveshark.com/#!/kirualex",
        osrc:"http://osrc.dfm.io/kirualex",
        isAvailable:false
    };

    // Ready
    $scope.htmlReady();
});