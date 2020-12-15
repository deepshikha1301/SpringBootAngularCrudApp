var app = angular.module("crudApp", []);

app.controller("crudControl", function($scope){
	
	$scope.rows = [];
	
	$scope.addItem = function(){
		$scope.rows.push($scope.inputItemField);
		$scope.inputItemField = null;
	};
	

	$scope.markItemDone = function(index){
		$scope.rows.splice(index, 1);
	};
});

