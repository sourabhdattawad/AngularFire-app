myApp.controller('RegistrationController', ['$scope', "$firebaseAuth", '$location','Authentication',
    function($scope, $firebaseAuth, $location, Authentication) {


        $scope.login = function() {

           Authentication.login($scope.user).then(function(authData) {

                $location.path('/meetings');

                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Authentication failed:", error);
                $scope.loginError = 'Username or password didn\'t match';
            });

        }

        $scope.register = function() {
           Authentication.register($scope.user).then(function(){
            Authentication.login($scope.user).then(function(){
                $location.path('/meetings');
            });
           });


        }

    }
]);