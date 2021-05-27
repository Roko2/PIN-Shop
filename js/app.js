var pcShop = angular.module('pcShop', []);
pcShop.controller('mainController', function ($scope, $http) {
    $scope.oKategorije = [];
    $scope.oPodKategorije=[];
    $http({
        method: "GET",
        url: "./query/kategorije.php"
    }).then(function (response) {
        console.log(response.data); 
        $scope.oKategorije = response.data;
    }, function (response) {
        console.log('Doslo je do poreške');
    });
});

