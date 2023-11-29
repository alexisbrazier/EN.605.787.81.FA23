(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('MainMenuAppController', MainMenuAppController);
  
  
  MainMenuAppController.$inject = ['data'];
  function MainMenuAppController(data) {
    var mainMenu = this;
    mainMenu.data = data;
  }
  
  })();
  
