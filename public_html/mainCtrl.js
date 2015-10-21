angular.module("pomodoro")
.controller("mainCtrl", ['$scope', '$location','dataInterface', function($scope,$location, dataInterface){
 
  $scope.test = "blah";
  $scope.changeView = function(view) {
    console.log("going to:  "+ view)
    $location.path(view);
  };
  $scope.changePartial = function(partial){
    $scope.currentPartial = partial;
  };
  
  $scope.currentPartial = "introduction/introduction.html"
}]);