// Code goes here

angular.module("pomodoro", [
    'ngAnimate',
    'ui.bootstrap',
    'ngRoute',
    'pomodoro.introduction',
    'pomodoro.todo'
])
        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/introduction'});

            }]);