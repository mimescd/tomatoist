angular.module("tomatoist.introduction")
  .controller('introCtrl', ['$scope', function($scope) {
    $scope.myTest = "boom!";
    $scope.data = {"columns":[{
      "lead": "The wondrous, rich features of the Todoist app",
      "body":"Combining the powerful tasklist using tasks YOU'VE ALREADY SET with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist."
    },{
      "lead": "The productivity powerhouse that is the pomodoro technique",
      "body":"Combining the powerful tasklist capabilities with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist"
    }]};
  }])