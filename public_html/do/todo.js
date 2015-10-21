angular.module("pomodoro.todo", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {

                $routeProvider.when('/do', {
                    templateUrl: 'do/do.html',
                    controller: 'todoCtrl'
                });
            }]) 