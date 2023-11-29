(function () {
    'use strict';
    
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant("CategoriesApi", "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json");
    
    
    MenuDataService.$inject = ['$q', '$timeout']
    function MenuAppService($q, $timeout) {
      var service = this;
      service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (CategoriesApi)
            }).then(function (result) {
                // process result and only keep items that match
                var allcategories = [];

                for (const i in result.data) {
                  var category = result.data[i].name;
                  allcategories.push({name: category});
                    }
                return [allcategories];

                })
                
            }
        }
      service.getItemsForCategory = function (categoryShortName) {
        baseApi = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";
        MenuApi = baseApi.concat(categoryShortName,".json")
        itemsincategory = [];

        return $http({
          method: "GET",
          url: (MenuApi)
        }).then(function (result) {
          for (const i in result.data.menu_items) {
            var namedish = result.data.menu_items[i].name;
            var shortnamedish = result.data.menu_items[i].short_name;
            var description = result.data.menu_items[i].description;
            itemsincategory.push({name: namedish, shortname: shortnamedish, description: description});
          }
        })
      
      
    }

    
    })();
    
