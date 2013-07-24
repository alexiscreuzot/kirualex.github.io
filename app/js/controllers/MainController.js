'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope, $http, $routeParams){


    $scope.perso = {
        mail:"alexis.creuzot@gmail.com",
        gravatar:"http://www.gravatar.com/avatar/e5fe13cbbb92ae5b473a25cc95222387?s=100",
        github:"https://github.com/kirualex",
        stack_overflow:"http://stackoverflow.com/users/421786/kirualex",
        hn:"https://news.ycombinator.com/user?id=kirualex",
        grooveshark:"http://grooveshark.com/#!/kirualex",
        osrc:"http://osrc.dfm.io/kirualex",
        twitter:"http://twitter.com/kirualex",
        isAvailable:true
    };

    var image = $('.avatar img').attr('src', $scope.perso.gravatar);
    if (! image.prop('complete')) {
        image.load(function () {
            $('.avatar').toggleClass('animate');
            $('.avatar').css('margin', '40px 0 30px');
        });
    }else{
        $scope.imageLoaded = true;
        $('.avatar').css('margin', '30px');
    }

    // Ready
    $scope.htmlReady();
});