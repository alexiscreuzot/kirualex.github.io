'use strict';

// declare controller to myApp
myApp.controller('ScribblesController',function($scope, $http, $routeParams){

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
    }/*,{
        id:4,
        title: "Building the 7 Minute Workout App",
        date: "30 May"
    }*/];

    // Scribble detail
    if($routeParams.scribbleId){
        Graphy.startLoading(120);
        $scope.scribble = $scope.scribbles[$routeParams.scribbleId];
        $http.get('scribbles/'+$routeParams.scribbleId+'.md').success(function(data) {
          var dataToParse = {text:data};
          $http.post('https://api.github.com/markdown', angular.toJson(dataToParse)).success(function(parsedData) {
              $scope.scribble.content = parsedData;
              $('.article').addClass('trigger'); // anim
              Graphy.stopLoading();
          });
      });
    }

    // Ready
    $scope.htmlReady();
});