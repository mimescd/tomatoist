angular.module("tomatoist")
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
    }

  }

}])