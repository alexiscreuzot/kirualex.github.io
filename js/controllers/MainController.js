'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [,{
        name:"iOS Apps",
        content:
        [{
            name:"7-minute Workout",
            url:"https://itunes.apple.com/us/app/7-minutes-workout/id650627810?l=en&ls=1&mt=8",
            description:"The perfect assistant to get in shape using the scientific 7-minute Workout"
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

    // Scribbles
    $scope.scribbles =
    [{
        id:0,
        title: "KALayoutHelper library",
        date: "13 Apr"
    },{
        id:1,
        title: "KASlideShow library",
        date: "22 May"
    },{
        id:2,
        title: "KANibHelper library",
        date: "24 May"
    },{
        id:3,
        title: "ColourLove Project, DRY KISS anyone ?",
        date: "27 May"
    },{
        id:4,
        title: "Building the 7 Minutes Workout App",
        date: "29 May"
    }];

    // Scribble detail
    if($routeParams.scribbleId){
        $scope.scribble = $scope.scribbles[$routeParams.scribbleId];
        $http.get('scribbles/'+$routeParams.scribbleId+'.md').success(function(data) {
          //$scope.scribble.content = data;
          var dataToParse = {text:data};
          $http.post('https://api.github.com/markdown', angular.toJson(dataToParse)).success(function(parsedData) {
              $scope.scribble.content = parsedData;
              $('.loader').addClass('hidden');
              $('.article').addClass('displayed');
          });
      });
    }

    // Ready
    $scope.htmlReady();
});