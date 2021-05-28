var pcShop = angular.module('pcShop', []);

// pcShop.config(function($routeProvider){
//     $routeProvider.when('/', {
//         templateUrl: 'index.html',
//         controller: 'mainController'
//         });
//     $routeProvider.when('/potkategorije', {
//    templateUrl: 'templates/potkategorije.html',
//    controller: 'artikliController'
//    });
//    $routeProvider.otherwise({
//    template:'Došlo je do pogreške'
//    });
//    });

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

