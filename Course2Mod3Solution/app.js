(function () {
    'use strict';
    
angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
        controller: FoundItemsDirectiveController,
        scope: {
            found:"<",
            onRemove: '&',
            title: '@title'
        },
        templateUrl: "foundItems.html",
        bindToController: true,
        controllerAs: 'list'
        
    
    };
    return ddo;

}

function FoundItemsDirectiveController() {
    var found = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.found = [];

    narrow.finditems = function(item) {
        var promise = MenuSearchService.getMatchedMenuItems(item)
        promise.then(function(matchedItems){
            narrow.found = matchedItems;
            if(narrow.found.length > 0) {
                narrow.hasBeenSearched = true
            }
            else {
                narrow.hasBeenSearched = false
            }

        }).catch(function (error){
            console.log("There was an error.")
        });
        }
    }


    narrow.remove = function(index){
        MenuSearchService.removeItem(index);
    }



MenuSearchService.$inject['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var foundItems = [];
    
    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
            method: "GET",
            url: (ApiBasePath)
        }).then(function (result) {
            // process result and only keep items that match
            var foundItems = []
            if(!searchTerm) {
                return foundItems;
            }

            for (var i = 0; i < result.length; i++) {
                var description = result[i].description.toLowerCase();
                searchTerm = searchTerm.toLowerCase();
                if (description.indexOf(searchTerm) !== -1) {
                  return foundItems.push(result[i]);
                }
              }
      
            // return processed items
            return foundItems;
        })
    }

    service.removeItem = function(index) {
        foundItems.splice(index,1);
    }

    service.getItems = function () {
        return foundItems;
      };
}

})();
