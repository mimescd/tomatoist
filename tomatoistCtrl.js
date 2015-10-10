angular.module("tomatoist")
.controller("tomatoistCtrl", ['$scope', '$location', function($scope,$location){
  $scope.loginVisible = false;
  $scope.test = "blah";
  $scope.changeView = function(view) {
    console.log("going to:  "+ view)
    $location.path(view);
  };
  $scope.changePartial = function(partial){
    $scope.currentPartial = partial;
  };
  $scope.showLogin = function(){
      $scope.loginVisible = true;
  }
  $scope.currentPartial = "introduction/introduction.html"
}]);