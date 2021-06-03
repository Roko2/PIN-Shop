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

//Dohvacanje podataka sa forme preko PHP-a
function getFormData($form){
  var bezindexPolje = $form.serializeArray();
  var indeksiranoPolje = {};

  $.map(bezindexPolje, function(n, i){
    indeksiranoPolje[n['name']] = n['value'];
  });

  return indeksiranoPolje;
}

pcShop.controller('mainController', function ($scope,$q, $http,$window) {
    $scope.vKategorije = [];
    $scope.oArtikli=[];
    $scope.oZaposlenik;
    var init=function(){
      $http({
        url: "./query/autorizacija.php",
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: $window.localStorage
      }).then(function(response){
        if(response.data===0){
          localStorage.removeItem("email");
          localStorage.removeItem("kljuc");
          $window.location.href='/PIN-Shop/prijava.html';
        }
      }),function(response){

      };
    }
    $scope.Odjava=function(){
      localStorage.removeItem("email");
      localStorage.removeItem("kljuc");
      $window.location.href='/PIN-Shop/prijava.html';
    }
    $q.all([
        $http.get("./query/kategorije.php"),
        $http.get("./query/artikli.php")
      ]).then(function(results) {
          $scope.vKategorije=results[0].data;
          $scope.vArtikli=results[1].data;
        //   $scope.oZaposlenik=results[2].data;
        //     console.log(results[2].data);
      });
      init();
});