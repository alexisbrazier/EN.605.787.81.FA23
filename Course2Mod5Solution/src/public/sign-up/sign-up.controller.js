(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController)
  .service('SignUpService', SignUpService);
  
  SignUpController.$inject = ['$scope'];
  function SignUpController($scope) {
    $scope.userList = [];
    $scope.formSubmitted = "";  
    $scope.showError = false;
    $scope.errorMessage = "";


    $scope.submitForm = function(){
    


      var signUpData = {
        fname: $scope.newuser.fname,
        lname: $scope.newuser.lname,
        email: $scope.newuser.email,
        phone: $scope.newuser.phone,
        favorite: $scope.newuser.favorite
      };
      console.log(SignUpService.CheckMenuItem(signUpData.favorite))
      $scope.showError = SignUpService.checkMenuItem(signUpData.favorite)
      if ($scope.ShowError) [
        $scope.errorMessage = "No such menu number exists"
      ]




      $scope.userList.push(signUpData);
      
      $scope.formSubmitted = "Your information has been saved";

      console.log('Sign Up Data:', signUpData);
      console.log('User List', $scope.userList)
      // console.log('formsubmitted function:', formSubmitted)
    }

  }

  SignUpService.$inject = ['$q', 'categoryShortname']
  function SignUpService($q, favorite){
    var service = this;
    var baseApi = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";

    service.checkMenuItem = function(favorite) {
      if (favorite == 1) {
        return true;
      }
      else {
        return false;
      }
    }
    service.getCategory = function(favorite) {
      var MenuApi = baseApi.concat(favorite,".json")
      return $http({
        method: "GET",
        url: (MenuApi)
      }).then(function(result){
        return result;
      })
    console.log(result);
    }
  }
  
  })();
