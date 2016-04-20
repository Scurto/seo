/**
 * Created by yustymenko on 20.04.2016.
 */
var model = "Hello world";

var helloWorldApp = angular.module("helloWorldApp", []);

helloWorldApp.controller("HelloWorldCtrl", function($scope) {
	$scope.message = model;

	$scope.clickHandler = function() {
		$scope.message = $scope.text;
	}
});


