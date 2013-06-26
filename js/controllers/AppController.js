'use strict';

myApp.controller('AppController', function($scope, $location) {

	$scope.slug = function(text) {
			return text
			.toLowerCase()
			.replace(/[^\w ]+/g,'')
			.replace(/ +/g,'-')
			;
		};

		$scope.routeIs = function(routeName) {
			return $location.path() === routeName;
		};

		$scope.menus =
		[{link:"", icon:"user"},
		{link:"lab", icon:"beaker"},
		{link:"scribbles", icon:"bookmark"},
		{link:"contact", icon:"envelope-alt"}];

	});