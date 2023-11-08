(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;



        narrow.getItems = function (searchValue) {
            console.log('hello')
            var promise = MenuSearchService.getMatchedMenuItems(searchValue).then(function(matcheditems) {
                narrow.found = matcheditems[0]
            });
            console.log(promise)


        }

        narrow.remove = function(item) {
            console.log(item)
            console.log(narrow.found)
        }
        

    }

    MenuSearchService.$inject['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        // console.log(ApiBasePath)
        console.log($http)

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function (result) {
                // process result and only keep items that match
                var found_all = []

                for (const property in result.data) {
                    for (var i in result.data[property].menu_items) {

                        var namedish = result.data[property].menu_items[i].name
                        var shortnamedish = result.data[property].menu_items[i].short_name
                        var description = result.data[property].menu_items[i].description

                        if (description.includes(searchTerm)) {
                            found_all.push({name: namedish, shortname: shortnamedish, description: description})
                        }
                    }
                }
                return [found_all];
            })
        }
    }

    // .filter('');
})();
