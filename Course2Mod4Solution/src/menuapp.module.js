(function () {
    'use strict';

    angular.module("MenuApp", ['ui.router'])
        .controller("MenuAppController", MenuAppController)
        .service("MenuDataService", MenuDataService)
        .config(function($stateProvider, $urlServiceProvider) {
            var categoriesState = {
              name: 'categories',
              url: '/categories',
              component: "categories",
              resolve: {
                categories: function(MenuDataService) {
                  return MenuDataService.getCategories();
                }
              }
            }
          
            var itemState = {
              name: 'item',
              url: '/item',
              template: '<h3>ITEM PAGE!</h3>'
            }

            var homeState = {
                name: 'home',
                url: '/home',
                template: '<h3>Welcome to Restaurant</h3>'
              }
          
            $stateProvider.state(categoriesState);
            $stateProvider.state(itemState);
            $stateProvider.state(homeState);

            $urlServiceProvider.rules.otherwise({ state: 'homeState' });

          })
        .constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

    function MenuAppController(MenuDataService) {
        var stuff = this;



        stuff.getItems = function () {
            var promise = MenuDataService.getCategories().then(function(matcheditems) {
                narrow.found = matcheditems
            });
        }
    }
    function MenuDataService($http, ApiBasePath) {
        var service = this;
        service.getCategories = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function (result) {
                var all_cat = []
                for (const property in result.data) {
                    for (var i in result.data[property].category) {
                        var cat_one = result.data[property].category.name
                        if (!all_cat.includes(cat_one)) {
                            all_cat.push(cat_one)
                        }
                    }
                }
                return [all_cat];
            })
        }
    }
})();
