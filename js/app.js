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

pcShop.controller('mainController', function ($scope,$q, $http) {
    $scope.oKategorije = [];
    $scope.oArtikli=[];
    $scope.allData=[];
    $q.all([
        $http.get("./query/kategorije.php"),
        $http.get("./query/artikli.php")
      ]).then(function(results) {
          $scope.oKategorije=results[0].data;
          $scope.vArtikli=results[1].data;
         //console.log(results[0].data);
      });
});

