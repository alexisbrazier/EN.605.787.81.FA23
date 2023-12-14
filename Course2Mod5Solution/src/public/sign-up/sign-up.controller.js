(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['$scope','$http'];
  function SignUpController($scope, $http) {

    $scope.userList = [];
    $scope.formSubmitted = "";  
    $scope.showError = false;
    $scope.errorMessage = "";

    function constructUrl(favorite) {
      var service = this;
      var baseApi = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";
      try{
        var letters = favorite.match(/[a-zA-Z]+/).join()
        var numbers = favorite.match(/\d+/);
  
        return baseApi.concat(letters.toUpperCase(),"/menu_items/",numbers,".json");
      } catch (error){
        $scope.showError = true;
        return;
      }
    }

    function getUrl(url){
      return $http( {
        method: 'GET',
        url: (url)
      })
      .catch(error => {
        $scope.showError = true;
        return false; // Returns false if an error occurs or the URL does not exist
      });
    }

    function testUrl(menuItem) {
      menuItem.then(response => {
        try{
          if (response.data.length>0){
            console.log("response length", response.data.length)
            return true;
          }  
          else {
            console.group("error caught looking for response data length > 0 ");
            return false;
          }
        } catch (error) {
          console.log("error caught looking for response data length");
          return false;
        }

      })
    }


    $scope.submitForm = function(){
      $scope.userList = []; //clear the previous users
      $scope.showError = false; //clear previous errors
      $scope.errorMessage = ""; //clear error message
      $scope.formSubmitted = ""; //clear submit button

      var signUpData = {
        fname: $scope.newuser.fname,
        lname: $scope.newuser.lname,
        email: $scope.newuser.email,
        phone: $scope.newuser.phone,
        favorite: $scope.newuser.favorite
      };

      var MenuApi = constructUrl(signUpData.favorite);
      console.log("MenuApi:", MenuApi);
      console.log("showerror:", $scope.showError);

      if(!$scope.showError) {
        var MenuItem = getUrl(MenuApi);
        console.log(MenuItem);
      }

      if ($scope.showError) {
        $scope.errorMessage = "No such menu number exists, try again" ;
        console.log($scope.errorMessage);
      } else {
        $scope.userList.push(signUpData);
        $scope.formSubmitted = "Your information has been saved";
      }


    }

  }

  })();
