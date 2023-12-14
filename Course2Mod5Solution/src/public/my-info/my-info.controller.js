    (function () {
        "use strict";
        
        angular.module('public')
        .controller('MyInfoController', MyInfoController)
        
        MyInfoController.$inject = ['$scope'];
        function MyInfoController($scope) {
            var userNo = $scope.userList.length;
            if(userNo>0) {
                var UserDisplay = true;
                console.log(UserDisplay);
            }
            else {
                var UserDisplay = false;
                console.log(UserDisplay);
            }
            var user = $scope.userList[userNo];
            console.log(user);
          }
      
        

        
        })();
