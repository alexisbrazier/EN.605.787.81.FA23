(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['$scope'];
    function SignUpController($scope) {
      $scope.user = {};
    
    
      $scope.submitForm = function(){
        var signUpData = {
          fname: $scope.user.fname,
          lname: $scope.user.lname,
          email: $scope.user.email,
          phone: $scope.user.phone,
          favorite: $scope.user.favorite
        };
        console.log('Sign Up Data:', signUpData);
      }
    }
    
    
    })();

