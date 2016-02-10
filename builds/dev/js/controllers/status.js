myApp.controller('StatusController', function($firebase, $scope, $rootScope,$firebaseObject, $firebaseAuth, FIREBASE_URL,Authentication) {

		var ref = new Firebase(FIREBASE_URL);
		$rootScope.authObj = $firebaseAuth(ref);
		  $scope.logout = function(){

            Authentication.logout();
            $rootScope.currentUser = null;
         
        }

		$rootScope.authObj.$onAuth(function(authData) {
		  if (authData) {
		    console.log("Logged in as:", authData);
		    var ref = new Firebase(FIREBASE_URL+'user/'+authData.uid);
           	var user = $firebaseObject(ref);
           	user.$loaded().then(function(){
           		$rootScope.currentUser = user;
           	});
		    console.log(user);
		  } else {

		    console.log("Logged out");
		  }
		});



});