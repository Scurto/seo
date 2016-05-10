/**
 * Created by yustymenko on 25.04.2016.
 */
var exampleAppModule = angular.module("exampleApp");
exampleAppModule.controller("defaultCtrl", function($scope) {
	$scope.buttons = {
		names: ['Button #1', 'Button #2', 'Button #3'],
		totalClicks: 0
	};
	$scope.$watch('buttons.totalClicks', function(newEval) {
		console.log('total click count = ' + newEval);
	});
});