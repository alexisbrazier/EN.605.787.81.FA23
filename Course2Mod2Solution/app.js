(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['$scope','ShoppingListCheckOffService', 'shoppingList'];
    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

    function ToBuyController() {
        var ToBuy = this;
        ToBuy.items = ShoppingListCheckOffService.getItems();
        ToBuy.buy = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }


    function AlreadyBoughtController(){
        var AlreadyBought = this;
        AlreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        const shoppingList = [
            {name: "cookies", quantity: 10, pricePerItem: 0.5},
            {name: "apples", quantity: 5, pricePerItem: 1.5},
            {name: "bananas", quantity: 4, pricePerItem: 0.6},
            {name: "eggs", quantity: 12, pricePerItem: 0.3},
            {name: "bread", quantity: 1, pricePerItem: 5}
        ]
        var alreadyBoughtItems = [];

        service.buyItem = function(index) {
            var boughtItem = toBuyItems.splice(index,1)[0];
            alreadyBoughtItems.push(boughtItem);
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };

        service.getItems = function() {
            return shoppingList;
        }
    }
    
})();