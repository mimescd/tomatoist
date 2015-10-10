angular.module("tomatoist.introduction")
        .controller('introCtrl', ['$scope', 'dataInterface', function($scope, dataInterface) {
                $scope.user = {};
                $scope.user.email="";
                $scope.user.pwd="";
                $scope.goToTodoistSite = function(){
                    alert("Enjoy the hard work of the Todoist team!")
                    window.location.href = "https://todoist.com/";
                }
                $scope.loginVisible = false;
                $scope.showLogin = function() {
                    $scope.loginVisible = true;
                     $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                    $("#username").focus();
                   
                }
                $scope.doLogin = function(){
                    dataInterface.login($scope.user.email, $scope.user.pwd).then(function(result){
                        alert(result.status)
                    })
                }

                $scope.data = {"columns": [{
                            "lead": "The wondrous, rich features of the Todoist app",
                            "body": "Combining the powerful tasklist using tasks YOU'VE ALREADY SET with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist."
                        }, {
                            "lead": "The productivity powerhouse that is the pomodoro technique",
                            "body": "Combining the powerful tasklist capabilities with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist"
                        }]};
            }])