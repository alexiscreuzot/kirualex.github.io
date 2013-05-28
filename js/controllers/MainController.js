'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [{
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
        title: "KALayoutHelper presentation",
        date: "13 Apr"
    },{
        id:1,
        title: "KASlideShow presentation",
        date: "22 May"
    },{
        id:2,
        title: "KANibHelper presentation",
        date: "24 May"
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