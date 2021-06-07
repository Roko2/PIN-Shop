var pcShop = angular.module('pcShop', ["ngRoute"]);

pcShop.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/pocetna.html'
        });
    $routeProvider.when('/potkategorije', {
   templateUrl: 'templates/potkategorije.html'
   });
   $routeProvider.otherwise({
    templateUrl: 'templates/error.html'
   });
   });

pcShop.controller('mainController', function ($scope,$q, $http,$window) {
    $scope.vKategorije = [];
    $scope.vArtikli=[];
    $scope.oZaposlenik;
    $scope.opisArtikla;
    $scope.vArtikliPotkategorije=[];
    $scope.kolicina=1;
    $scope.UgasiGumb=function(value){
      if(Number(value)<=0){
        $("#kupiArtikl").attr("disabled", true);
      }
      else{
        $("#kupiArtikl").attr("disabled", false);
      }
    }
    $scope.OpisArtikla=function(opis){
      $scope.opisArtikla=opis;
    }
    brojUlaza=0;
    $scope.Kupi=function()
    {
      var cart = $('#cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;
      cart.attr('data-totalitems',newCartTotal);
    };
    $scope.PosaljiIdPotkategorije=function(idPotkategorije){
    oPotkategorija={potkategorijaID:idPotkategorije};
      $http({
        url: "./query/potkategorije.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oPotkategorija)
      }).then(function(response){
        if(brojUlaza>0){
          $("#tablicaArtikli").DataTable().rows().remove();
        }
        $scope.vArtikliPotkategorije=response.data;
        if(brojUlaza==0){
        setTimeout(function(){
        $('#tablicaArtikli').DataTable({
              width:"100%",
              scrollY: 400,
              scrollX: "100%"
            }); 
        },100);
        brojUlaza++; 
      }
      }),function(response){
      };
    }
    $scope.init=function(){
      if($window.localStorage.getItem("email")==null && $window.localStorage.getItem("kljuc")==null){
        $window.location.href='/PIN-Shop/prijava.html';
        return;
      }
      oLocalStorage={email:$window.localStorage.getItem("email"),kljuc:localStorage.getItem("kljuc")};
      $http({
        url: "./query/autorizacija.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oLocalStorage)
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
      Cache.delete();
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
});