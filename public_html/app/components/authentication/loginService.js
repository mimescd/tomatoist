angular.module('tomatoistApp.authentication')
        .factory('loginService', ['$http', function($http) {
//        var login = false;
        var loginObj = {};
        var loginString = "http://todoist.com/API/login?";
        loginString += ("email=" + $("#usr").val() + "&password=" + $("#pwd").val());
        loginObj.loginString = loginString;
        loginObj.login = function() {
            console.log("logging in???");
            $http.get(loginString)
                    .then(function(res) {
                        loginObj.data = res.data;
                        console.log(loginObj.data);

                    });
        };
        return loginObj;
     

    }
]);