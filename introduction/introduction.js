angular.module("pomodoro.introduction",['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/introduction', {
    templateUrl: 'introduction/introduction.html',
    controller: 'introCtrl'
  });

  
}])