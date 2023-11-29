(function () {
    'use strict';
    
    angular.module('data')
    .component('shoppingList', {
      templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
    
