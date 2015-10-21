 angular.module("pomodoro.todo")
  .filter('pomodoros', function(){
    return function(input){
      input = input || '';
      var pomodoros = Math.floor(input /25);
      return pomodoros > 0  ? pomdoros : 0; 
    };
    
  })