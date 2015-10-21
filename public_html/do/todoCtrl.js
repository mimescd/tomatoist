angular.module("pomodoro.todo")
  .controller("todoCtrl", ['$scope', '$interval', function($scope, $interval) {
    //constant defining attr value for disabled
    $scope.disabled = "disabled";
    $scope.notDisabled = "";
    $scope.newTodo = "WHATCHA GONNA DO";
    $scope.addTodo = function(){
      $scope.tasks.push({"description": $scope.newTodo, "isComplete":false})
    }
    $scope.test = "my controller works, thank goodness";
    $scope.tasks = [{
      "description": "task 1",
      "notes": "last chance to do this",
      "isComplete": false,
      "edit":false
    }, {
      "description": "task 2",
      "notes": "note a priority",
      "isComplete": true,
      "edit":false
    }];
    $scope.edit = function(index) {
      console.log((".task-edit"+index))
      $scope.tasks[index].edit=true
     }
    $scope.remove = function(index){
      $scope.tasks.splice(index, 1)
    }
	
    $scope.startWork = function(index) {
      var twentyFiveMinutes = 1500;
      var secondInMs = 1000;
      if ( $scope.tasks[index].timeLeftInSession < twentyFiveMinutes) {
        
        $scope.tasks[index].workTimer = $interval($scope.count, secondInMs, $scope.tasks[index].timeLeftInSession, true, index)
      } else {
        $scope.tasks[index].timeLeftInSession = twentyFiveMinutes;
        $scope.tasks[index].workTimer = $interval($scope.count, secondInMs, twentyFiveMinutes, true, index)
      }
      $scope.tasks[index].timerRunning = true;
    }
    $scope.pauseWork = function(index) {
      var secondInMs = 1000;
      $interval.cancel($scope.tasks[index].workTimer)
      $scope.tasks[index].timerRunning = false;
    }
    $scope.stopWork = function(index) {
      $interval.cancel($scope.tasks[index].workTimer)
         var twentyFiveMinutes = 1500;
      $scope.tasks[index].timeLeftInSession = twentyFiveMinutes;
       $scope.tasks[index].timerRunning = false;
    }
    $scope.count = function(index) {
      //console.log($scope.tasks[index].timeLeftInSession)
      $scope.tasks[index].timeLeftInSession = $scope.tasks[index].timeLeftInSession - 1;
      $scope.tasks[index].timeWorked = $scope.tasks[index].timeWorked + 1;
    }
  }])