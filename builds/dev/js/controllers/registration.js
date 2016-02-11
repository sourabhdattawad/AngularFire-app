myApp.controller('RegistrationController', ['$scope', "$firebaseAuth", '$location','Authentication',
    function($scope, $firebaseAuth, $location, Authentication) {


        $scope.login = function() {
                        $scope.preload="preload";

           Authentication.login($scope.user).then(function(authData) {

                $location.path('/meetings');

                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Authentication failed:", error);
                $scope.preload=null;
                $scope.loginError = 'Username or password didn\'t match';
            });

        }

        $scope.register = function() {
              $scope.preload="preload";

           Authentication.register($scope.user)
           .catch(function(error) {
              //  console.error("Authentication failed:", error);
                $scope.regError = "This Email is already taken.";
            }).then(function(){
                 Authentication.login($scope.user).then(function(authData) {
                $location.path('/meetings');

                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Authentication failed:", error);
                $scope.preload=null;
                $scope.loginError = 'Username or password didn\'t match';
            });


            });
           }


       
    }
]);