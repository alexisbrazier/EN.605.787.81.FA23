(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .constant("Api", "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.nothingFound = false;


        narrow.getItems = function (searchValue) {
            var promise = MenuSearchService.getMatchedMenuItems(searchValue).then(function(matcheditems) {
                narrow.found = matcheditems[0]
                if(matcheditems[0].length === 0){
                    narrow.nothingFound = 'Nothing found';
                } else {
                    narrow.nothingFound = false;
                }
            });

            


        }

        narrow.remove = function(item) {
           var array = narrow.found;
           var index = array.indexOf(item);
           array.splice(index,1);

        }
        

    }

    MenuSearchService.$inject['$http', 'Api'];
    function MenuSearchService($http, Api) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (Api)
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
