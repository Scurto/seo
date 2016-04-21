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

helloWorldApp.controller("SampleAppCtrl", function($scope) {
	//ng-hide
	//$scope.hideElem1 = false;
	//$scope.hideElem2 = false;
	//$scope.hideElem3 = false;

	//ng-show
	//$scope.showElem1 = false;
	//$scope.showElem2 = false;
	//$scope.showElem3 = false;

	//ng-if(remove from dom)
	$scope.removeElem1 = true;
	$scope.removeElem2 = true;
	$scope.removeElem3 = true;
});


