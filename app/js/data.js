(function(){

	"use strict";

	angular.module("todoApp")
		.factory("data", function($http){

			var todos = [
				{id: 1, text: "Learn Angular Unit Testing"},
				{id: 2, text: "Make an app to unit tests"},
			];

			function getTodos(){
				return todos;
			}

			return {
				getTodos: getTodos
			}
		});

}());
