myApp.controller('MeetingController', ["$scope", "$firebaseArray", '$timeout', function($scope, $firebaseArray, $timeout, Authentication) {

    var ref = new Firebase('https://angularsourabh.firebaseio.com/speakers');
    //var speakers = $firebase(ref);
    //$scope.loaded = false;
    var speakers = $firebaseArray(ref);
    console.log(speakers);

    $scope.speakers = speakers;
    $scope.addspeaker = function() {
        speakers.$add({
            name: $scope.name,
            bio: $scope.bio,
        });

    }
    $scope.deletespeaker = function(key){
        speakers.$remove(key);
    }

    // $timeout(function() {
    //                      $scope.loaded = true;


    //     }, 3000);


}]);