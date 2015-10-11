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
                            "lead": "A wondrous to-do list",
                            "body": "Keep yourself on track to complete your goals--large and small"
                        }, {
                            "lead": "The pomodoro technique",
                            "body": "Keep yourself fresh while you chip away at your tasks, and view your timelog to see your prodctivity from the birds-eye."
                        }]};
            }])