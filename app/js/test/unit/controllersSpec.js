describe("Testing Angular Application", function(){

	beforeEach(module("todoApp"));

	describe("Testing Angular Controllers", function(){

		var scope, todoCtrl;

		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			todoCtrl = $controller("todoCtrl", {$scope: scope});
		}));

		it("should set the title in the scope", function(){
			expect(scope.title).toBeDefined();
			expect(scope.title).toEqual("Angular Todo Application");
		});

		it("should have two todos", function(){
			expect(scope.todos).toBeDefined();
			expect(scope.todos.length).toBe(2);
			expect(scope.todos[0].text).toEqual("Learn Angular Unit Testing");
			expect(scope.todos[1].text).toEqual("Make an app to unit tests");
		});

		it("should add new todo to the todos list", function(){
			expect(scope.todos.length).toEqual(2);

			scope.todo = {
				text: "Add some unit tests to the new todo app"
			};

			scope.add();

			expect(scope.todos.length).toEqual(3);
			expect(scope.todos[2].id).toEqual(3);
			expect(scope.todos[2].text).toEqual("Add some unit tests to the new todo app");
		});

		it("should remove todo from the todos list", function(){
			
			scope.remove(1);

			expect(scope.todos.length).toEqual(1);
			expect(scope.todos[0].text).toEqual("Make an app to unit tests");
		});

		it("should set removeMessage in the scope", function(){
			expect(scope.removeMessage).toBeUndefined();

			scope.remove(1);

			expect(scope.removeMessage).toBeDefined();
		});

	});

});
