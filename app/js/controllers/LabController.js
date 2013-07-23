'use strict';

// declare controller to myApp
myApp.controller('LabController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [{
        name:"Mobile Apps",
        content:
        [{
            name:"7 minutes Workout",
            url:"http://alexiscreuzot.com/apps/7-minutes-workout",
            description:"The perfect assistant to get in shape using the scientific 7-minute Workout, directly on your iPhone"
        }]
    },{
        name:"Web",
        content:
        [{
            name:"grinderlabs.com",
            url:"http://grinderlabs.com/",
            description:"A serverless website made for a good friend & colegue, Jérémy Paul. Images and videos are fetched directly from Flickr and Vimeo API using JQuery."
        }]
    },{
        name:"Libraries",
        content:
        [{
            name:"KAProgressLabel",
            url:"http://alexiscreuzot.com/KAProgressLabel/",
            description:"Minimal iOS circular progress library"
        },{
            name:"KAStatusBar",
            url:"http://alexiscreuzot.com/KAStatusBar/",
            description:"iOS status bar notification/alert library"
        },{
            name:"KALayoutHelper",
            url:"http://alexiscreuzot.com/KALayoutHelper",
            description:"A work in progress aiming to add a layout mechanism (similar to android) to views in iOS"
        },{
            name:"KASlideShow",
            url:"http://alexiscreuzot.com/KASlideShow",
            description:"Simple slideshow library for iOS "
        },{
            name:"KANibHelper",
            url:"http://alexiscreuzot.com/KANibHelper",
            description:"Ease up iOS Nib management and improve app maintanability"
        }]
    },{
        name:"Other",
        content:
        [{
            name:"ColourLove",
            url:"http://alexiscreuzot.com/ColourLove",
            description:"This project only purpose is to provide brief, clean and readable code in a dummy application. It is heavily library based and MVC oriented and shows mecanisms like downloading, storing and displaying data from a webservice."
        }]
    }];

    // Ready
    $scope.htmlReady();
});