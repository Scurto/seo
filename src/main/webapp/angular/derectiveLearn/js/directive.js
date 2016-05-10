/**
 * Created by yustymenko on 25.04.2016.
 */
var exampleAppModule = angular.module("exampleApp");
exampleAppModule.directive("triButton", function() {
	return {
		scope: {counter: '=counter'},
		link: function (scope, element, attrs) {
			element.on('click', function(event) {
				 console.log("Button click: " + event.target.innerText);
				scope.$apply(function() {
					scope.counter++;
				})
			});
		}
	}
});