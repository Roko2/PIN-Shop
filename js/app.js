var pcShop = angular.module('pcShop', ["ngRoute"]);

pcShop.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/pocetna.html'
        });
    $routeProvider.when('/potkategorije', {
   templateUrl: 'templates/potkategorije.html'
   });
   $routeProvider.when('/noviArtikl', {
    templateUrl: 'templates/noviArtikl.html'
    });
   $routeProvider.otherwise({
    templateUrl: 'templates/error.html'
   });
   });

pcShop.controller('mainController', function ($scope,$q, $http,$window) {
    $scope.vKategorije = [];
    $scope.vArtikli=[];
    $scope.vPotkategorije=[];
    $scope.vStavke=[];
    $scope.oZaposlenik;
    $scope.opisArtikla;
    $scope.ukupnaCijenaRacuna=0;
    $scope.kategorijaArtikla;
    $scope.vArtikliPotkategorije=[];
    $scope.kvantitetaArtikla;
    $scope.AzuriranjeArtiklId;
    $scope.odabranaKategorija;
    $scope.date=new Date();
    $scope.oArtikl={idArtikla:null};
    $scope.oArtiklForma={id:null,naziv:null,opis:null,kolicina:null,cijena:null};
    $scope.artiklObrisi={nIdArtikla:null,sNazivArtikla:null};

    $scope.ObrisiStavkuRacuna=function(stavka){
      console.log(stavka);
      const index = $scope.vStavke.indexOf(stavka.oStavke);
      $scope.vStavke.splice(index, 1);
      var kosarica = $('#cart');;
      var kolicinaKosarice = parseInt($scope.vStavke.length);
      kosarica.attr('data-totalitems',kolicinaKosarice);
    }

    $scope.OtvoriModalRacun=function(){    
      $("#modalRacun").modal("show");
    }
    $scope.DodajArtikl=function(){
      $http({
        url: "./crud/Artikl/create.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: getFormData($("#dodavanjeArtikla"))
      }).then(function(response){
      }),function(response){
      };
    }

    $scope.ArtiklAzuriraj=function(ArtiklId){
      $scope.AzuriranjeArtiklId=ArtiklId;
      oArtiklAzuriraj={idArtikla:ArtiklId};
      $http({
        url: "./query/jedanArtikl.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oArtiklAzuriraj)
      }).then(function(response){
        $scope.oArtiklForma={id:response.data.m_nIdArtikla,naziv:response.data.m_sNazivArtikla,opis:response.data.m_sOpisArtikla,kolicina:Number(response.data.m_nKvantitetaArtikla),cijena:response.data.m_fJdCijenaArtikla};
        $scope.odabranaKategorija=$window.localStorage.getItem("potkategorija");
      }),function(response){
      };
    }

    $scope.AzurirajArtikl=function(){
      $http({
        url: "./crud/Artikl/update.php",
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: getFormData($("#azuriranjeArtiklaForma"))
      }).then(function(response){
        $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
      }),function(response){
      };
    }

    $scope.Brisanje=function(idArtiklaBrisanje){
      oArtiklObrisi={idArtikla:idArtiklaBrisanje};
      $http({
        url: "./crud/Artikl/delete.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oArtiklObrisi)
      }).then(function(response){
      $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
      }),function(response){
      };
    }
    $scope.ObrisiArtikl=function(idArtikla,nazivArtikla){
      $scope.artiklObrisi={nIdArtikla:idArtikla,sNazivArtikla:nazivArtikla};
    }
    $scope.OpisArtikla=function(opis){
      $scope.opisArtikla=opis;
    }
    $scope.KvantitetaArtikla=function(kvantiteta,artiklID){
      $scope.kvantitetaArtikla=kvantiteta;
      $scope.oArtikl={idArtikla:artiklID};
    }
    brojUlaza=0;
    $scope.Kupi=function()
    {
      var kosarica = $('#cart');
      $http({
        url: "./query/jedanArtikl.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify($scope.oArtikl)
      }).then(function(response){
        response.data.odabranaKolicina=parseFloat($("#unosKolicine").val());
        response.data.ukupnaCijena=Number.parseFloat($("#unosKolicine").val()*parseFloat(response.data.m_fJdCijenaArtikla)).toFixed(2);
        $scope.vStavke.push(response.data);
        var kolicinaKosarice = parseInt($scope.vStavke.length);
        kosarica.attr('data-totalitems',kolicinaKosarice);
        $scope.ukupnaCijenaRacuna=parseFloat($scope.ukupnaCijenaRacuna);
        $scope.vStavke.forEach(x => {
          $scope.ukupnaCijenaRacuna+=parseFloat(x.ukupnaCijena);
        }); 
        $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna.toFixed(2);
      }),function(response){

      };
    };
    $scope.PosaljiIdPotkategorije=function(idPotkategorije){
    oPotkategorija={potkategorijaID:idPotkategorije};
      $http({
        url: "./query/artikliPotkategorije.php",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(oPotkategorija)
      }).then(function(response){
        $scope.vArtikliPotkategorije=response.data;
        $scope.kategorijaArtikla=response.data[0].m_nIdPotkategorijaArtikla;
         if(brojUlaza>0){
          $('#tablicaArtikli').DataTable().clear().destroy();
        }
        setTimeout(function(){
        $('#tablicaArtikli').DataTable({
              width:"100%",
              // scrollY: 430,
              "searching": true,
              "lengthMenu": [ [10,25,50,-1], [10,25,50,"All"] ],
              scrollX: "100%"
            }); 
        },100);
        brojUlaza++; 
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
          $window.location.href='/PIN-Shop/prijava.html';
        }
      }),function(response){
        
      };
    }
    $scope.Odjava=function(){
      $window.localStorage.removeItem("email");
      $window.localStorage.removeItem("kljuc");
      $window.localStorage.removeItem("potkategorija");
      $window.location.href='/PIN-Shop/prijava.html';
      Cache.delete();
    }
    $q.all([
        $http.get("./query/kategorije.php"),
        $http.get("./query/artikli.php"),
        $http.get("./query/potkategorije.php")
      ]).then(function(results) {
          $scope.vKategorije=results[0].data;
          $scope.vArtikli=results[1].data;
          $scope.vPotkategorije=results[2].data;           
      });
});

function getFormData($form){
  var bezindexPolje = $form.serializeArray();
  var indeksiranoPolje = {};
  
  $.map(bezindexPolje, function(n, i){
      indeksiranoPolje[n['name']] = n['value'];
  });
  
  return indeksiranoPolje;
  }