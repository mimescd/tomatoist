angular.module("pomodoro.todo")
  .controller("todoCtrl", ['$scope', function($scope) {
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
  }])