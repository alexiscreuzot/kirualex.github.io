'use strict';

// declare controller to myApp
myApp.controller('ScribblesController',function($scope, $http, $routeParams){

    // Init error page
    var error_page;
    $http.get('partials/error.html').success(function(data) {
      error_page = data;
  });

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
        title: "ColourLove Project, DRY KISS anyone?",
        date: "27 May"
    },{
        id:4,
        title: "Building the 7 Minute Workout App",
        date: "6 Jun"
    },{
        id:5,
        title: "Circular progress with KAProgressLabel",
        date: "12 Jun"
    },{
        id:6,
        title: "You are the only one seeing this page",
        date: "25 Jun"
    }];

    // Scribble detail
    if($routeParams.scribbleId){
        Graphy.startLoading(120);
        $scope.scribble = $scope.scribbles[$routeParams.scribbleId];
        $http.get('scribbles/'+$routeParams.scribbleId+'.md').success(function(data) {
          var dataToParse = {text:data};

          $http({method: 'POST', url: 'https://api.github.com/markdown', data:angular.toJson(dataToParse), timeout:10*1000}).
          success(function(parsedData, status, headers, config) {
            $scope.scribble.content = parsedData;
              $('.article').addClass('trigger'); // anim
              Graphy.stopLoading();
          }).
          error(function(data, status, headers, config) {
            $scope.scribble.content = error_page;
            $('.article').addClass('trigger'); // anim
            Graphy.stopLoading();
        });
      });
    }



    // Ready
    $scope.htmlReady();
});