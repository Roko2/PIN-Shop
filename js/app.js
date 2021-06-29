// ------------Inicijaliziranje modula-------------------------------
var pcShop = angular.module('pcShop', ["ngRoute","ngSanitize"]);

//--------------Postavljanje ruta-----------------------------------
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
   $routeProvider.when('/racuni',{
    templateUrl: 'templates/racuni.html'
   });
   $routeProvider.otherwise({
    templateUrl: 'templates/error.html'
   });
   });

//-----------------------------------implementacija funkcija i odnosa u glavnom kontroleru-----------------------------------
pcShop.controller('mainController', function ($scope,$q, $http,$window,$timeout,$compile) {
  $scope.funkcijaTest;
  $scope.vKategorije=[];
  $scope.vArtikli=[];
  $scope.vPotkategorije=[];
  $scope.vStavkeRacuna=[];
  $scope.vStavke=[];
  $scope.vRacuni=[];
  $scope.oZaposlenik;
  $scope.opisArtikla;
  $scope.ukupnaCijenaRacuna=0;
  $scope.kategorijaArtikla;
  $scope.vArtikliPotkategorije=[];
  $scope.kvantitetaArtikla;
  $scope.AzuriranjeArtiklId;
  $scope.odabranaKategorija;
  $scope.oModalPotvrda={headerModala:"",bodyModala:""};
  $scope.obavijestDodavanje={poruka:""};
  $scope.oArtikl={idArtikla:null};
  $scope.datumIzradeRacuna=new Date();
  $scope.oArtiklForma={id:null,naziv:null,opis:null,kolicina:null,cijena:null};
  $scope.artiklObrisi={nIdArtikla:null,sNazivArtikla:null};
  $scope.vrijemePrijave=$window.localStorage.getItem("vrijemePrijave");
  $scope.oOsoba={};
  $scope.popustRacuna=0;
  $scope.provjeraKolicine;
  $scope.popustRacunBaza;
  $scope.odabranaKolicinaStavkeRacun;
  //---------------------Potvrda brisanja računa---------------------------------------
  $scope.ObrisiRacunPotvrda=function(idRacun){
    oRacunObrisi={IDracuna:idRacun};
    $http({
      url:'./crud/Racun/delete.php',
      method:'POST',
      headers:{'Content-Type':'application/json'},
      data:JSON.stringify(oRacunObrisi)
    }).then(function(response){
      $scope.obavijestDodavanje={poruka:response.data.poruka};
      $('#tostDodavanje').toast('show');
      $scope.DohvatiRacune();
    }),function(response){};
  }
  //----------------------Poziv API-a za brisanje računa-------------------------------------
  $scope.ObrisiRacun=function(IDracuna){
    $scope.oModalPotvrda={headerModala:"Brisanje računa",bodyModala:"obrisati račun"};
    const buttonObrisiRacun = $compile('<button type="button" class="btn btn-primary" ng-click="ObrisiRacunPotvrda('+IDracuna+')" data-dismiss="modal">Obriši</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonObrisiRacun[0]));
  }
  //----------------------Poziv API-a za dohvacanje stavki računa----------------------------
  $scope.DetaljiRacuna=function(racunID,popustRac){
    $scope.popustRacunBaza=popustRac;
    oRacun={IdRacuna:racunID};
    $http({
      url:'./query/stavkeRacuna.php',
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      data:JSON.stringify(oRacun)
    }).then(function(response){
      $scope.vStavkeRacuna=response.data;
    }),function(response){

    };

  }
  //-------------------Automatsko računanje cijene na računu-------------------------------
  function IzracunajRacun(){
    $scope.ukupnaCijenaRacuna=0;
    $scope.ukupnaCijenaRacuna=parseFloat($scope.ukupnaCijenaRacuna);
    $scope.vStavke.forEach(x => {
      $scope.ukupnaCijenaRacuna+=parseFloat(x.ukupnaCijena);
    }); 
    $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna-(($scope.ukupnaCijenaRacuna*parseFloat($scope.popustRacuna) )/100);
    $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna.toFixed(2);
  }
  //-----------------Poziv API-ja za izradu računa te upis u bazu-------------------------------
  $scope.IzradiRacun=function(){
    oStavkeRacuna={stavke:$scope.vStavke,popust:$scope.popustRacuna};
    $http({
      url: "./crud/Racun/create.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oStavkeRacuna)
    }).then(function(response){
      $scope.obavijestDodavanje={poruka:response.data.poruka};
      $('#tostDodavanje').toast('show');
      $('#modalRacun').modal('hide');
      $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
      IzracunajRacun();
      $scope.ukupnaCijenaRacuna=0;
      $scope.popustRacuna=0;
      $scope.vStavke=[];
      var kosarica = $('#cart');
      var kolicinaKosarice = parseInt($scope.vStavke.length);
      kosarica.attr('data-totalitems',kolicinaKosarice);
    }),function(response){

    };
  }
 //-------------------Popunjavanje template modala za izradu računa-------------------------------- 
  $scope.IzradiRacunPotvrda=function(){
    $scope.oModalPotvrda={headerModala:"Izrada računa",bodyModala:"izraditi račun"};
    const buttonIzradiRacun = $compile('<button type="button" class="btn btn-primary" ng-click="IzradiRacun()" data-dismiss="modal">Izradi</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonIzradiRacun[0]));
  }

  //-------------brisanje stavke iz košarice----------------------------
  $scope.ObrisiStavkuRacuna=function(stavka){
  const index = $scope.vStavke.indexOf(stavka.oStavke);
  $scope.vStavke.splice(index, 1);
  var kosarica = $('#cart');
  var kolicinaKosarice = parseInt($scope.vStavke.length);
  kosarica.attr('data-totalitems',kolicinaKosarice);
  IzracunajRacun();
    }

  //----Otvaranje račun modala-------------------
  $scope.OtvoriModalRacun=function(){ 
    $("#modalRacun").modal("show");
  }

  //-----------Poziv API-ja za dodavanje novog artikla u bazu---------------------------
  $scope.ArtiklPotvrdaDodavanja=function(){
      $http({
      url: "./crud/Artikl/create.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: getFormData($("#dodavanjeArtikla"))
    }).then(function(response){
      $('#dodavanjeArtikla')[0].reset();
      $('#odabirKategorije').prop('selectedIndex',0);
      $scope.obavijestDodavanje={poruka:response.data};
      $('#tostDodavanje').toast('show');
    }),function(response){
    };
  }

  //--------------------Popunjavanje template modala sa elementima vezanim za dodavanje artikla--------------------------------------
  $scope.DodajArtikl=function(){
    $scope.oModalPotvrda={headerModala:"Dodavanje artikla",bodyModala:"dodati artikl"};
    const buttonDodaj = $compile('<button type="button" class="btn btn-primary" ng-click="ArtiklPotvrdaDodavanja()" data-dismiss="modal">Dodaj</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonDodaj[0]));
  }

  //--------------------Popunjavanje template modala sa elementima vezainim za ažuriranje artikla--------------------------------------
  $scope.ArtiklAzuriraj=function(){
    $scope.oModalPotvrda={headerModala:"Ažuriranje artikla",bodyModala:"ažurirati artikl"};
    const buttonAzuriraj = $compile('<button type="button" class="btn btn-primary" ng-click="AzurirajArtiklPotvrda()" data-dismiss="modal">Ažuriraj</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonAzuriraj[0]));
  }

  //-----------------------------Popunjavanje inputa forme za ažuriranje artikla---------------------------------------------
  $scope.ArtiklAzurirajForma=function(ArtiklId){
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

  //-----------------Pozivanje API-ja za ažuriranje artikla u bazi------------------------------------------
  $scope.AzurirajArtiklPotvrda=function(){
    $http({
      url: "./crud/Artikl/update.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: getFormData($("#azuriranjeArtiklaForma"))
    }).then(function(response){
      $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
      $scope.obavijestDodavanje={poruka:response.data};
      $('#tostDodavanje').toast('show');
      $("#modalAzuriranje").modal("hide");
    }),function(response){
    };
  }

  //----------------------Pozivanje API-ja za brisanje artikla iz baze-----------------------
  $scope.Brisanje=function(idArtiklaBrisanje){
    oArtiklObrisi={idArtikla:idArtiklaBrisanje};
    $http({
      url: "./crud/Artikl/delete.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oArtiklObrisi)
    }).then(function(response){
    $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
    $scope.obavijestDodavanje={poruka:response.data};
    $('#tostDodavanje').toast('show');
    }),function(response){
    };
  } 

  //---------------Popunjavanje template modala sa elementima vezanim za brisanje artikla-------------------------------
  $scope.ObrisiArtikl=function(idArtikla,nazivArtikla){ 
  $scope.oModalPotvrda={headerModala:"Brisanje artikla",bodyModala:"obrisati artikl",footerModala:"Obriši"};
  const buttonObrisi = $compile('<button type="button" class="btn btn-primary" ng-click="Brisanje('+idArtikla+')" data-dismiss="modal">Obriši</button>')($scope);
  $('#funkcijaModala').empty();
  angular.element(document.querySelector('#funkcijaModala').append(buttonObrisi[0]));
  $scope.artiklObrisi={nIdArtikla:idArtikla,sNazivArtikla:nazivArtikla};
  }

  //-------------spremanje odabranog opisa artikla u scope varijablu----------------------
  $scope.OpisArtikla=function(opis){
    $scope.opisArtikla=opis;
  }

  //------------spremanje dostupne količine artikla u scop varijablu-------------------------
  $timeout(function(){
     $("#unosKolicine").bind("change",function() {
    $scope.provjeraKolicine=parseInt($("#unosKolicine").val());
 });
  });
 
  $scope.KvantitetaArtikla=function(kvantiteta,artiklID){
    $scope.kvantitetaArtikla=kvantiteta;
    $scope.oArtikl={idArtikla:artiklID};
    if($scope.vStavke.length>0){
      $scope.vStavke.forEach(element => {
        if(element.m_nIdArtikla==artiklID){
          $scope.odabranaKolicinaStavkeRacun=parseInt(element.odabranaKolicina);
          postojiArtiklNaRacunu=true;
        }
      });
      $scope.odabranaKolicinaStavkeRacun=parseInt($scope.odabranaKolicinaStavkeRacun);
    }
  }
  //----------------spremanje artikla u košaricu automatski izračunavajući ukupnu cijenu artikla-----------------------------
  $scope.Kupi=function()
  {
    postojiArtiklNaRacunu=false;
    var kosarica = $('#cart');
    $http({
      url: "./query/jedanArtikl.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify($scope.oArtikl)
    }).then(function(response){
      response.data.odabranaKolicina=$("#unosKolicine").val();
      response.data.ukupnaCijena=Number.parseFloat($("#unosKolicine").val()*parseFloat(response.data.m_fJdCijenaArtikla)).toFixed(2);
      $scope.vStavke.push(response.data);
      $scope.ukupnaCijenaRacuna=0;
      $scope.ukupnaCijenaRacuna=parseFloat($scope.ukupnaCijenaRacuna);
      $scope.vStavke.forEach(x => {
      $scope.ukupnaCijenaRacuna+=parseFloat(x.ukupnaCijena);
    }); 
      $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna.toFixed(2);
      var kolicinaKosarice = parseInt($scope.vStavke.length);
      kosarica.attr('data-totalitems',kolicinaKosarice);
    }),function(response){

    };
  };

  //------------------------inicijaliziranje tablice artikala ispisanih po odabranoj kategoriji-----------------------------
  brojUlaza=0;
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
      $timeout(function () {
        $('#tablicaArtikli').DataTable({
            "searching": true,
            "lengthMenu": [ [10,25,50,-1], [10,25,50,"All"] ],
            columnDefs: [ { orderable: false, targets: [5,6,7] }, { searchable: false, targets: [5,6,7] } ]
          }); 
    });
      brojUlaza++; 
    $window.localStorage.setItem("potkategorija",idPotkategorije);
    }),function(response){
    };
      }

  //----------------funkcija koja se pokreće prilikom učitavanja stranice radi autorizacije korisnika i učitavanje njegovih podataka-----------------
  $scope.init=function(){
    $timeout(function(){
      $("#navIcon1").attr("class","fa fa-microchip mr-1 text-white");
      $("#navIcon2").attr("class","fa fa-desktop mr-1 text-white");
      $("#navIcon3").attr("class","fa fa-print mr-1 text-white");
      $("#navIcon4").attr("class","fa fa-database mr-1 text-white");
      $("#navIcon5").attr("class","fa fa-mouse mr-1 text-white");
      $("#navIcon6").attr("class","fa fa-network-wired mr-1 text-white");
      $("#navIcon7").attr("class","fa fa-laptop mr-1 text-white");
    });
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
        $window.localStorave.removeItem("vrijemePrijave");
        $window.location.href='/PIN-Shop/prijava.html';
      }
    }),function(response){
    };
    $http({
      url: "./query/jedanZaposlenik.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oLocalStorage)
    }).then(function(response){
        $scope.oOsoba={...response.data};
    }),function(response){
    };
  }

  //------Odjava korisnika iz sustava brisajući njegove podatke iz localstoragea i preusmjeravanje na stranicu prijave---------------
  $scope.Odjava=function(){
    $http({
      url:'./query/unistiSesiju.php',
      method:'GET'
    }).then(function(response){
      $window.localStorage.removeItem("email");
      $window.localStorage.removeItem("kljuc");
      $window.localStorage.removeItem("potkategorija");
      $window.localStorage.removeItem("vrijemePrijave");
      $window.location.href='/PIN-Shop/prijava.html';
      Cache.delete();
    }),function(response){
    };
  }

  //------------skup GET zahtjeva za dohvaćanje podataka iz baze------------------------
  $q.all([
      $http.get("./query/kategorije.php"),
      $http.get("./query/artikli.php"),
      $http.get("./query/potkategorije.php")
    ]).then(function(results) {
        $scope.vKategorije=results[0].data;
        $scope.vArtikli=results[1].data;
        $scope.vPotkategorije=results[2].data;      
    });
  //-----------------API za dohvacanje racuna iz baze--------------------------
  $scope.DohvatiRacune=function(){
    $http({
      url:'./query/racuni.php',
      method:'GET'
    }).then(function(response){
        try{$('#tablicaRacuni').DataTable().clear().destroy();}
        catch(e){};
        $scope.vRacuni=response.data;
        $timeout(function(){
          $('#tablicaRacuni').DataTable({
          "searching": true,
          "lengthMenu": [[10,25,50,-1], [10,25,50,"All"]],
          columnDefs: [ { orderable: false, targets: [4,5] }, { searchable: false, targets: [4,5] } ]
          });
        });
    }),function(response){
    };
  }
  });

  //---funkcija za pretvaranje inputa forme i polje objekata čitljivo kao JSON zapis-----------
  function getFormData($form){
  var bezindexPolje = $form.serializeArray();
  var indeksiranoPolje = {};

  $.map(bezindexPolje, function(n, i){
      indeksiranoPolje[n['name']] = n['value'];
  });

  return indeksiranoPolje;
  }