angular.module("pomodoro.introduction")
        .controller('introCtrl', ['$scope', 'dataInterface', '$modal', function($scope, dataInterface, $modal) {
                $scope.user = {};
                $scope.user.email = "";
                $scope.user.pwd = "";
                $scope.loginVisible = false;
                $scope.showLogin = function() {
                    $scope.loginVisible = true;
                    $("html, body").animate({scrollTop: $(document).height()}, "slow");
                    $("#username").focus();

                }
                $scope.doLogin = function() {
                    dataInterface.login($scope.user.email, $scope.user.pwd).then(function(result) {
                        alert(result.status)
                    })
                }
                $scope.openRegisterModal = function() {
                    $scope.animationsEnabled= true;
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'introduction/register.html',
                        controller: 'registerCtrl',
                        resolve: {
                            
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        //  $log.info('Modal dismissed at: ' + new Date());
                    });
                };

                $scope.toggleAnimation = function() {
                    $scope.animationsEnabled = !$scope.animationsEnabled;
                };

                $scope.data = {"columns": [{
                            "lead": "The wondrous, rich features of the Todoist app",
                            "body": "Combining the powerful tasklist using tasks YOU'VE ALREADY SET with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist."
                        }, {
                            "lead": "The productivity powerhouse that is the pomodoro technique",
                            "body": "Combining the powerful tasklist capabilities with a pomodoro timer and integrated timelog per task or task group, this is a powerful productivity tool for the serious Todoist"
                        }]};
            }])