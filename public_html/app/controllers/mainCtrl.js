/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("tomatoistApp")
        .controller("mainCtrl", ["$scope", function($scope, $location, $injector) {
                $scope.changeView = function(view) {
                    $location.path(view);
                }
                $scope.injector = $injector


            }
        ]);
