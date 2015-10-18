angular.module("pomodoro.home",['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });

  
}])