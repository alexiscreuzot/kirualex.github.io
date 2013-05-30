'use strict';

// declare controller to myApp
myApp.controller('LabController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [,{
        name:"iOS Apps",
        content:
        [{
            name:"7 minute Workout",
            url:"https://itunes.apple.com/app/7-minutes-workout/id650627810?&ls=1&mt=8",
            description:"The perfect assistant to get in shape using the scientific 7-minute Workout, directly on your iPhone"
        }]
    },{
        name:"Libraries",
        content:
        [{
            name:"KALayoutHelper",
            url:"http://kirualex.github.io/KALayoutHelper",
            description:"A work in progress aiming to add a layout mechanism (similar to android) to views in iOS"
        },{
            name:"KASlideShow",
            url:"http://kirualex.github.io/KASlideShow",
            description:"Light slideshow library for iOS "
        },{
            name:"KANibHelper",
            url:"http://kirualex.github.io/KANibHelper",
            description:"Ease up iOS Nib management and improve app maintanability"
        }]
    },{
        name:"Projects",
        content:
        [{
            name:"ColourLove",
            url:"http://kirualex.github.io/ColourLove",
            description:"This project only purpose is to provide brief, clean and readable code in a dummy application. It is heavily library based and MVC oriented and shows mecanisms like downloading, storing and displaying data from a webservice."
        }]
    }];

    // Ready
    $scope.htmlReady();
});