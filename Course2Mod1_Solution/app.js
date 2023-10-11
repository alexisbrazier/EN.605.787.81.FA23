(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.check = function() {
    if ($scope.dishes != undefined) {
      //removing spaces for empty item removal
      var dishesNoSpaces = $scope.dishes.replace(/ /g, "");
      var num_dishes = CalculateNumDishes(dishesNoSpaces);
      if (num_dishes <= 3) {
        $scope.response = "Enjoy";
        $scope.responseColor = "green";
        $scope.responseBorderColor = "green";
      }
      else {
        $scope.response = "Too much!";
        $scope.responseColor = "red";
        $scope.responseBorderColor = "green";
      }
    }
    else {
      $scope.response = "Please enter data first";
      $scope.responseBorderColor = "red";
    }
    $scope.responseBorderWidth = 'medium';
    $scope.responseBorderStyle = 'solid';
  }



  function CalculateNumDishes(string){
    var split_string = string.split(",");
    //remove the empties by creating new array and appending non-empty items to it
    var split_string_noEmpties = [];
    var i = 0;
    while (i < split_string.length) {
      if (split_string[i].length > 0) {
        split_string_noEmpties.push(split_string[i])
      }
      i+=1;
    }
    var num_dishes = split_string_noEmpties.length;
    return num_dishes
  }

  
}


})();
