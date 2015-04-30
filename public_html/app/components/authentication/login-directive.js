/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module("tomatoistApp.authentication")
        .directive('login', function() {
            return{
                restrict: 'E',
                scope: {},
                templateUrl: "app/components/authentication/login.html"
            };
        });