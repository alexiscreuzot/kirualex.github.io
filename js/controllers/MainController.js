'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope){

    // Libs
    $scope.lab_data =
    [{
        name:"Libraries",
        content:
        [{
            name:"KALayoutHelper",
            url:"http://kirualex.github.io/KALayoutHelper",
            description:"A work in progress aiming to add a layout mecanism (similar to android) to views in iOS"
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
    $scope.scribbles = [{title:"Test de titre", content:"test de contenu", date:"01-01-01"},{title:"Test de titre", content:"test de contenu", date:"01-01-01"},{title:"Test de titre", content:"test de contenu", date:"01-01-01"}];

    // Ready
    $scope.htmlReady();
});