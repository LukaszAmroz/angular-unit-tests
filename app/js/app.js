(function(){
	
	"use strict";

	angular.module("todoApp", ["ngRoute"])
		.config(function($routeProvider){
			$routeProvider
				.when("/", {
					controller: "todoCtrl",
					templateUrl: "views/todos.html"
				})
				.otherwise({ redirectTo: "/" });
		});

}());
