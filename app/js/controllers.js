(function(){

	"use strict";

	angular.module("todoApp")
		.controller("todoCtrl", ["$scope", "data", "$timeout",
			function($scope, data, $timeout){
				
				$scope.title = "Angular Todo Application";
				
				$scope.todos = data.getTodos();

				var _idCount = 3;

				$scope.add = function(){
					$scope.todos.push({id: _idCount++, text: $scope.todo.text});
					$scope.todo = "";
				};

				$scope.remove = function(todo){
					$scope.todos.splice(todo.id - 1, 1);
					$scope.removeMessage = "Todo " + "'" + todo.text + "'" + " was removed!";
					$timeout(function(){
						$scope.removeMessage = "";
					}, 1000);
				};

		}]);

}());
