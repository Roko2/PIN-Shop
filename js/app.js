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
    $scope.slucajnaSlika;
    $scope.kategorijaArtikla;
    $scope.vArtikliPotkategorije=[];
    $scope.oKolicina={vrijednost:1};
    $scope.kvantitetaArtikla;
    $scope.artiklObrisi={nIdArtikla:null,sNazivArtikla:null};
    $scope.Brisanje=function(idArtiklaBrisanje){
      oArtiklObrisi={idArtikla:idArtiklaBrisanje};
      console.log(JSON.stringify(oArtiklObrisi));
      $http({
        url: "./crud/Artikl/delete.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oArtiklObrisi)
      }).then(function(response){
       console.log($window.localStorage.getItem("potkategorija"));
      $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
       
      }),function(response){
        console.log(response);
      };
    }
    $scope.ObrisiArtikl=function(idArtikla,nazivArtikla){
      $scope.artiklObrisi={nIdArtikla:idArtikla,sNazivArtikla:nazivArtikla};
      console.log(kategorijaArtikla);
    }
    $scope.OpisArtikla=function(opis){
      $scope.opisArtikla=opis;
    }
    $scope.KvantitetaArtikla=function(kvantiteta){
      $scope.kvantitetaArtikla=kvantiteta;
    }
    brojUlaza=0;
    $scope.Kupi=function()
    {
      var cart = $('#cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;
      cart.attr('data-totalitems',newCartTotal);
      $scope.oKolicina={vrijednost:1};
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
        $scope.kategorijaArtikla=response.data[0].m_nIdPotkategorijaArtikla;
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
      $window.localStorage.setItem("potkategorija",idPotkategorije);
      }),function(response){
      };
    }
    $scope.init=function(){
      if($window.localStorage.getItem("email")==null && $window.localStorage.getItem("kljuc")==null){
        $window.location.href='/PIN-Shop/prijava.html';
        return;
      }
      oLocalStorage={email:$window.localStorage.getItem("email"),kljuc:$window.localStorage.getItem("kljuc")};
      $http({
        url: "./query/autorizacija.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oLocalStorage)
      }).then(function(response){
        if(response.data===0){
          $window.localStorage.removeItem("email");
          $window.localStorage.removeItem("kljuc");
          $window.localStorage.removeItem("potkategorija");
          $window.localStorage.removeItem("spol");
          $window.location.href='/PIN-Shop/prijava.html';
        }
      }),function(response){
        
      };
    }
    $scope.Odjava=function(){
      $window.localStorage.removeItem("email");
      $window.localStorage.removeItem("kljuc");
      $window.localStorage.removeItem("potkategorija");
      $window.localStorage.removeItem("spol");
      $window.location.href='/PIN-Shop/prijava.html';
      Cache.delete();
    }
    $q.all([
        $http.get("./query/kategorije.php"),
        $http.get("./query/artikli.php"),
        $http.get("https://randomuser.me/api/?gender="+$window.localStorage.getItem("spol")+"&inc=picture&noinfo")
      ]).then(function(results) {
          $scope.vKategorije=results[0].data;
          $scope.vArtikli=results[1].data;
          $scope.slucajnaSlika=results[2].data.results[0].picture.large;
        //   $scope.oZaposlenik=results[2].data;
             
      });
});