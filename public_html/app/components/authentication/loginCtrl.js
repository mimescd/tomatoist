/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("tomatoistApp.authentication")
        .controller("loginCtrl", ["$scope", function($scope, loginService, $http) {
//        $http.get("./res/inventoryExample.json")
//                .then(function(res) {
//                    $scope.inventory = res.data.inventory;
//                    console.log($scope.inventory);
//                    $scope.test = "fancy test thing";
//                });
//                


                $scope.authenticate = function() {
                    
                    

                    if (loginService.login()) {
                        changeView("tomatoist");
                    } else {

                    }
                    ;
                }

                $scope.testFunction = function() {
                    alert("hello???");
                }
            }]);