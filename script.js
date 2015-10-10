// Code goes here

angular.module("tomatoist",[
  'ngRoute',
  'tomatoist.introduction'
  ])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/introduction'});
 
}]);