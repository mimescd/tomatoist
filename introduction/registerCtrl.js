/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("pomodoro.introduction")
.controller('registerCtrl', ['$scope','dataInterface', '$modalInstance', function($scope, dataInterface, $modalInstance) {
        $scope.user = {};
        $scope.user.name ="";
        $scope.user.email = "";
        $scope.user.pwd = "";
    $scope.registerUser = function() {
                    dataInterface.register($scope.user).then(function(result) {
                        console.log($scope.user)
                        alert(result.data)
                    })
                }

    $scope.ok = function() {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  }]);