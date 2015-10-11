angular.module("pomodoro")
        .factory("dataInterface", ["$http", function($http) {
  var apiString = "https://todoist.com/API/v6/";
  return {
    getData: function(dataFile) {
      return $http.get("./data.json")
        .then(function(result) {
          return {
            data: result.data,
            status: result.status
          }
        })
    },
    login: function(email, password) {
        return $http.get(apiString + "login?email="+email +"&"+"password="+password)
        
        .then(function(result) {
          return {
            data: result.data,
            status: result.status
          }
        })  
    },
    register: function(user) {
        console.log(user);
        return $http({
    url: 'http://thecurtisplace.com/tomatoist/php/register.php',
    method: "POST",
    data: "username="+user.name+"&"+"email="+ user.email + "&password="+ user.pwd,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        
        .then(function(result) {
          return {
            data: result.data,
            status: result.status
          }
        })  
    }

  }

}])