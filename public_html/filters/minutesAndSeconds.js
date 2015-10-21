	angular.module("pomodoro.todo")
  .filter('minutesAndSeconds', function() {
    return function(input) {
      input = input || '';

      var secondsInMin = 60;
      var minutes = Math.floor(input / secondsInMin);
      var seconds = input % secondsInMin;
      return minutes + "m : " + seconds + "s";
    };
  })
 