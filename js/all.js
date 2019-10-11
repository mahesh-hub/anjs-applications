var app = angular.module("myShopingList", []);
app.controller("firstCtrl", function ($scope) {
    $scope.products = ["Milk", "Bread", "Cheese", "Choklates", "banana", "Oil"];


    $scope.addItems = function () {
        $scope.products.push($scope.bindData);

    }
        $scope.removeItem = function (x) {
            $scope.products.splice(x, 1);
    }

});