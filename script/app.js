var app = angular
    .module('module', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "sort-view/brick/brick.html"
        })
        .when("/list", {
            templateUrl: "sort-view/list/list.html"
        })
    })

    .factory("productsService", function ($http) {
        return {
            products: function () {
                return $http.get("http://localhost:5000/api/products").then(function (response) {
                    return response.data;
                });
            }
        }
    })

   .controller('controller', function($scope, productsService) {
        productsService.products().then(function (data) {
            $scope.products = data;

            $scope.sortColumn = "productname";
            $scope.itemsTotal = $scope.products.length;
            $scope.options = [{value: 5, name: "5"},{value: 10, name: "10"},{value: 20, name: "20"},{value: 50, name: "50"},{value: 100, name: "100"}];

            $scope.brickActive = true; 
        });
    })