myApp.factory('Authentication', function($firebase,$firebaseArray, $firebaseAuth, $location, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    var myObject = {

        login: function(user) {

            return authObj.$authWithPassword({
                email: user.email,
                password: user.password
            });
        },
        logout: function(user) {

            return authObj.$unauth();
        },

        register: function(user) {


            return authObj.$createUser({
                email: user.email,
                password: user.password
            }).then(function(regUser){
            	var ref = new Firebase(FIREBASE_URL+'user');

            	var users = $firebaseArray(ref);

            	var userInfo ={
            		date:Firebase.ServerValue.TIMESTAMP,
            		regUser:regUser.uid,
            		firstname :user.firstname,
            		lastname:user.lastname,
            		email : user.email
            	} 

            	    ref.child(regUser.uid).set(userInfo);


            });
        },
        isLogged: function(){
        	var authData = $scope.authObj.$getAuth();

			if (authData) {
			  console.log("Logged in as:", authData.uid);
			} else {
			  console.log("Logged out");
			}

			        }
	}

    return myObject;


});