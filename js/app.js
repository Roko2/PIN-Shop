// ------------Inicijaliziranje modula-------------------------------
var pcShop = angular.module('pcShop', ["ngRoute","ngSanitize","ng-fusioncharts"]);

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
   $routeProvider.when('/zaposlenici',{
     templateUrl: 'templates/zaposlenici.html'
   });
   $routeProvider.when('/neaktivniArtikli',{
     templateUrl: 'templates/neaktivniArtikli.html'
   });
   $routeProvider.when('/statistika',{
     templateUrl:'templates/statistika.html'
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
  $scope.vNeaktivniArtikli=[];
  $scope.vZaposlenici=[];
  $scope.oZaposlenik;
  $scope.opisArtikla;
  $scope.ukupnaCijenaRacuna=0;
  $scope.kategorijaArtikla;
  $scope.vArtikliPotkategorije=[];
  $scope.kvantitetaArtikla;
  $scope.countArtikli=0;
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
  $scope.statistikaUkArtikala;
  $scope.statistikaNeaktivniArtikli;
  $scope.statistikaNajtrazenijiArtikl;
  $scope.statistikaBrojZaposlenika;
  $scope.statistikaZarada,
  $scope.rezultat=0;
  $scope.dataSource;
  //---------------Poziv API-ja za dodavanje novog zaposlenika--------------------------
  $scope.DodavanjeZaposlenikaPotvrda=function(){
    $("body").css("overflow-y","hidden");
    dodajZaposlenika=true;
    const ime=document.getElementById('dodavanjeImeZaposlenika');
    const prezime=document.getElementById('dodavanjePrezimeZaposlenika');
    const datumRodjenja=document.getElementById('dodavanjeDatumRodjenjaZaposlenik');
    const email=document.getElementById('dodavanjeEmailZaposlenika');
    const oib=document.getElementById('dodavanjeOIBZaposlenika');
    const placa=document.getElementById('dodavanjePlacaZaposlenika');
    const godinaStaza=document.getElementById('dodavanjeGodinaStazaZaposlenka');
    const lozinka=document.getElementById('dodavanjeLozinkaZaposlenik');

    if(ime.value.trim()==""){
      PostaviGresku(ime,"Ime ne može biti prazno");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(ime);
    }
    if(prezime.value.trim()==""){
      PostaviGresku(prezime,"Prezime ne može biti prazno");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(prezime);
    }
    if(datumRodjenja.value.trim()=="" || !(/([0-3]?\d\.{1})([01]?\d\.{1})([12]{1}\d{3}\.?)/).test(datumRodjenja.value)){
      PostaviGresku(datumRodjenja,"Datum rođenja nije valjan");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(datumRodjenja);
    }
    if(!(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(pinshop)\.hr$/).test(email.value)){
      PostaviGresku(email,"Email mora biti u formatu 'primjer@pinshop.hr'");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(email);
    }
    if(!(/^\d{11}$/).test(oib.value)){
      PostaviGresku(oib,"Oib se mora sastojati od 11 znamenaka");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(oib);
    }
    if(!(/^\d+$/.test(parseInt(placa.value))) || isNaN(parseInt(placa.value))){
      PostaviGresku(placa,"Plaća mora biti broj");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(placa);
    }
    if(!(/^\d+$/.test(parseInt(godinaStaza.value))) || isNaN(parseInt(godinaStaza.value))){
      PostaviGresku(godinaStaza,"Godina staža mora biti cjelobrojni broj");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(godinaStaza);
    }
    if(lozinka.value.trim()==""){
      PostaviGresku(lozinka,"Lozinka ne smije biti prazna");
      dodajZaposlenika=false;
    }
    else{
      PostaviValjano(lozinka);
    }
    if(dodajZaposlenika){
      oProvjeraZaposlenik={zaposlenikOIB:oib.value,zaposlenikEmail:email.value};
      $http({
        url:'./query/provjeraZaposlenika.php',
        method:'POST',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(oProvjeraZaposlenik)
      }).then(function(response){
        if(response.data==0){
          const greska=document.getElementById("ZaposlenikGreska");
           PostaviGresku(greska,"Email ili oib koji ste unijeli već postoje");
          dodajZaposlenika=false;
          }
          if(dodajZaposlenika){
            oZaposlenik=getFormData($("#dodajZaposlenikaForma"));
            oZaposlenik.ulogaZaposlenika="Prodavač";
            oZaposlenik.statusZaposlenika=1;
            console.log(oZaposlenik);
            $http({
              url:'./crud/Zaposlenik/create.php',
              method:'POST',
              headers:{'Content-Type':'application/json'},
              data: oZaposlenik
            }).then(function(response){
              $scope.obavijestDodavanje={poruka:response.data};
              $('#tostDodavanje').toast('show');
              $('#modalDodavanjeZaposlenika').modal('hide');
              $scope.DohvatiZaposlenike();
            }),function(response){};
          }
      }),function(response){};
    }
  }
  //----------------Popunjavanje template modala za dodavanje zaposenika-----------------
  $scope.ZaposlenikDodaj=function(){
    $scope.oModalPotvrda={headerModala:"Zapošljavanje",bodyModala:"zaposliti osobu"};
    const buttonDodajZaposlenika = $compile('<button type="button" class="btn btn-primary" ng-click="DodavanjeZaposlenikaPotvrda()" data-dismiss="modal">Zaposli</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonDodajZaposlenika[0]));
  }
  //----------------Poziv API-a za dohvacanje zaposlenika iz baze-------------------------
  $scope.DohvatiZaposlenike=function(){
    $timeout(function(){
      $('.date').datepicker({
        language: "hr",
        format: "d.m.yyyy.",
        startDate: "-100y",
        endDate: 'today',
        autoclose: true
      });
    });

      try{$('#tablicaZaposlenici').DataTable().clear().destroy();}
        catch(e){};
        $scope.vZaposlenici=response.data;
        $timeout(function(){
          $('#tablicaZaposlenici').DataTable({
          "searching": true,
          "lengthMenu": [[10,25,50,-1], [10,25,50,"All"]],
          columnDefs: [ { orderable: false, targets: [4,8,10,11] }, { searchable: false, targets: [8,10,11] } ]
          });
        });
  }
  //---------------Povecavanje kolicine stavke u košarici--------------------------
  $scope.SmanjiKolicinu=function(idArtikla){
    for(var i=0;i<$scope.vStavke.length;i++){
       if($scope.vStavke[i].m_nIdArtikla==idArtikla && $scope.vStavke[i].odabranaKolicina>1){
           $scope.vStavke[i].odabranaKolicina-=1;
           $scope.vStavke[i].ukupnaCijena=parseFloat($scope.vStavke[i].m_fJdCijenaArtikla)*parseFloat($scope.vStavke[i].odabranaKolicina);
           $scope.vStavke[i].ukupnaCijena= $scope.vStavke[i].ukupnaCijena.toFixed(2);
       }
     }
     IzracunajRacun();
   }
  //---------------Povecavanje kolicine stavke u košarici--------------------------
  $scope.PovecajKolicinu=function(idArtikla,kvantiteta){
   for(var i=0;i<$scope.vStavke.length;i++){
      if($scope.vStavke[i].m_nIdArtikla==idArtikla && $scope.vStavke[i].odabranaKolicina<kvantiteta){
        
          $scope.vStavke[i].odabranaKolicina+=1; 
          $scope.vStavke[i].ukupnaCijena=parseFloat($scope.vStavke[i].m_fJdCijenaArtikla)*parseFloat($scope.vStavke[i].odabranaKolicina);
          $scope.vStavke[i].ukupnaCijena= $scope.vStavke[i].ukupnaCijena.toFixed(2);
      }
    }
    IzracunajRacun();
  }
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
      url:'./crud/Racun/readStavkeRacuna.php',
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
    $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna-(($scope.ukupnaCijenaRacuna*parseFloat($scope.popustRacuna))/100);
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
  $('#tablicaArtikli > tbody  > tr').each(function(index, tr) { 
    if(stavka.oStavke.m_nIdArtikla==tr.id){
      $(tr).find('td #gumbKupi').removeClass("onemoguciGumb");
      $(tr).find('.celijaKupi').removeClass("cursorNotAllowed");
    }
 });
  IzracunajRacun();
  if($scope.vStavke.length==0){
    $scope.popustRacuna=0;
  }
    }

  //----Otvaranje račun modala-------------------
  $scope.OtvoriModalRacun=function(){ 
    $("#modalRacun").modal("show");
  }

  //-----------Poziv API-ja za dodavanje novog artikla u bazu---------------------------
  $scope.ArtiklPotvrdaDodavanja=function(){
    const naziv=document.getElementById('dodajNazivArtikla');
    const opis=document.getElementById('dodajOpisArtikla');
    const jmj=document.getElementById('dodajJmjArtikla');
    const kolicina=document.getElementById('dodajKolicinaArtikl');
    const cijena=document.getElementById('dodajCijenaArtikla');
    const kategorija=document.getElementById('odabirKategorije');
    const nazivValue=naziv.value.trim();
    const opisValue=opis.value.trim();
    const jmjValue=jmj.value.trim();
    const kolicinaValue=kolicina.value;
    const cijenaValue=cijena.value;
    const kategorijaValue=kategorija.value;
    dodaj=true;
    if(nazivValue==""){
      PostaviGresku(naziv,"Naziv artikla ne može biti prazan");
      dodaj=false;
    }
    else{
      PostaviValjano(naziv)
    }
    if(opisValue==""){
      PostaviGresku(opis,"Opis artikla ne može biti prazan");
      dodaj=false;
    }
    else{
      PostaviValjano(opis);
    }
    if(jmjValue==""){
      PostaviGresku(jmj,"Jedinica mjere ne može biti prazna");
      dodaj=false;
    }
    else{
      PostaviValjano(jmj);
    }
    if(!(/^\d+$/.test(parseInt(kolicinaValue))) || isNaN(parseInt(kolicinaValue))){
      PostaviGresku(kolicina,"Količina artikla mora biti cjelobrojni broj");
      dodaj=false;
    }
    else{
      PostaviValjano(kolicina);
    }
    if(!(/^[0-9]*\.[0-9]{2}$/gi.test(parseFloat(cijenaValue).toFixed(2)))){
      PostaviGresku(cijena,"Cijena artikla mora biti broj");
      dodaj=false;
    }
    else{
      PostaviValjano(cijena);
    }
    if(kategorijaValue==""){
      PostaviGresku(kategorija,"Odaberite kategoriju");
      dodaj=false;
    }
    else{
      PostaviValjano(kategorija);
    }
    if(dodaj){
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
  }
  //--------------------Poziv API-ja za otpustanje zaposlenika iz baze---------------------------------------------------------------
  $scope.OtpustanjeZaposlenikaPotvrda=function(zaposlenikOib){
    oZaposlenik={oibZaposlenika:zaposlenikOib,status:0};
    $http({
    url: "./crud/Zaposlenik/delete.php",
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify(oZaposlenik)
  }).then(function(response){
    $scope.obavijestDodavanje={poruka:response.data};
    $('#tostDodavanje').toast('show');
    $scope.DohvatiZaposlenike();
  }),function(response){
  };
}
//-------------------Poziv API-ja za vraćanje neaktivnih artikala u bazi-------------------------------------------------------------
$scope.VracanjeArtiklaPotvrda=function(ArtiklID){
  oArtikl={idArtikla:ArtiklID,aktivnost:1};
  $http({
  url: "./crud/Artikl/vratiArtikl.php",
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  data: JSON.stringify(oArtikl)
}).then(function(response){
  $scope.obavijestDodavanje={poruka:response.data};
  $('#tostDodavanje').toast('show');
  $scope.DohvatiNeaktivneArtikle();
}),function(response){
};
}
//--------------------Popunjavanje template modala sa elementima vezanim za vraćanje artikla--------------------------------------
$scope.VratiArtikl=function(idArtikla,nazivArtikla){
  $scope.oModalPotvrda={headerModala:"Vraćanje neaktivnog artikla",bodyModala:"vratiti artikl"};
  const buttonOtpusti = $compile('<button type="button" class="btn btn-primary" ng-click="VracanjeArtiklaPotvrda('+idArtikla+')" data-dismiss="modal">Vrati</button>')($scope);
  $('#funkcijaModala').empty();
  angular.element(document.querySelector('#funkcijaModala').append(buttonOtpusti[0]));
  $scope.artiklObrisi={sNazivArtikla:nazivArtikla}; 
}
  //--------------------Popunjavanje template modala sa elementima vezanim za otpuštanje zaposlenika--------------------------------------
  $scope.OtpustiZaposlenika=function(zaposlenikOib,zaposlenikEmail,zaposlenikIme,zaposlenikPrezime){
    $scope.oModalPotvrda={headerModala:"Otpuštanje zaposlenika",bodyModala:"otpustiti zaposlenika"};
    const buttonOtpusti = $compile('<button type="button" class="btn btn-primary" ng-click="OtpustanjeZaposlenikaPotvrda('+zaposlenikOib+')" data-dismiss="modal">Otpusti</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonOtpusti[0]));
    $scope.zaposlenikObrisi={sEmail:zaposlenikEmail,sIme:zaposlenikIme,sPrezime:zaposlenikPrezime}; 
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
    const buttonAzurirajArtikl = $compile('<button type="button" class="btn btn-primary" ng-click="AzurirajArtiklPotvrda()" data-dismiss="modal">Ažuriraj</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonAzurirajArtikl[0]));
  }
  //--------------------Popunjavanje template modala sa elementima vezainim za ažuriranje artikla--------------------------------------
  $scope.ZaposlenikAzuriraj=function(){
    $scope.oModalPotvrda={headerModala:"Ažuriranje zaposlenika",bodyModala:"ažurirati zaposlenika"};
    const buttonAzurirajZaposlenika = $compile('<button type="button" class="btn btn-primary" ng-click="AzurirajZaposlenikaPotvrda()" data-dismiss="modal">Ažuriraj</button>')($scope);
    $('#funkcijaModala').empty();
    angular.element(document.querySelector('#funkcijaModala').append(buttonAzurirajZaposlenika[0]));
  }
  //--------------------Pozivanje API-ja nakon validacije za ažuriranje i dodavanje ažuriranog zaposlenika u bazu-----------------------
  $scope.AzurirajZaposlenikaPotvrda=function(){
    azuriraj=true;
    const ime=document.getElementById('updateImeZaposlenika');
    const prezime=document.getElementById('updatePrezimeZaposlenika');
    const uloga=document.getElementById('updateUlogaZaposlenika');
    const placa = document.getElementById('updatePlacaZaposlenika');
    const godinaStaza=document.getElementById('updateGodinaStazaZaposlenka');
    if($scope.oZaposlenikForma.ime.trim()==""){
      PostaviGresku(ime,"Ime ne može biti prazno");
      azuriraj=false;
    }
    else{
      PostaviValjano(ime);
    }
    if($scope.oZaposlenikForma.prezime.trim()==""){
      PostaviGresku(prezime,"Prezime ne može biti prazno");
      azuriraj=false;
    }
    else{
      PostaviValjano(prezime);
    }
    if($scope.oZaposlenikForma.uloga.trim()==""){
      PostaviGresku(uloga,"Uloga ne može biti prazna");
      azuriraj=false;
    }
    else{
      PostaviValjano(uloga);
    }
    if(!(/^[0-9]*\.[0-9]{2}$/gi.test(parseFloat($scope.oZaposlenikForma.placa).toFixed(2)))){
      PostaviGresku(placa,"Plaća mora biti broj");
      azuriraj=false;
    }
    else{
      PostaviValjano(placa);
    }
    if(!(/^\d+$/.test(parseInt($scope.oZaposlenikForma.godinaStaza) || isNaN(parseInt($scope.oZaposlenikForma.godinaStaza))))){
      PostaviGresku(godinaStaza,"Godina staža mora biti cjelobrojni broj");
      azuriraj=false;
    }
    else{
      PostaviValjano(godinaStaza);
    }
    if(azuriraj){
      $http({
        url:'./crud/Zaposlenik/update.php',
        method:'POST',
        headers:{'Content-Type':'application/json'},
        data:getFormData($("#azuriranjeZaposlenikaForma"))
      }).then(function(response){
        $scope.obavijestDodavanje={poruka:response.data};
        $('#tostDodavanje').toast('show');
        $("#modalAzuriranjeZaposlenika").modal("hide");
        $scope.DohvatiZaposlenike();
      }),function(response){};
    }
  }
  //----------------------------Popunjavanje template modala sa elementima vezanim za ažuriranje zaposlenika----------------
  $scope.AzuriranjeZaposlenikaForma=function(ZaposlenikID){
    oZaposlenikAzuriraj={email:ZaposlenikID};
    $http({
      url: "./crud/Zaposlenik/readOne.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oZaposlenikAzuriraj)
    }).then(function(response){
      $scope.oZaposlenikForma={email:response.data.m_sEmail,ime:response.data.m_sIme,prezime:response.data.m_sPrezime,placa:parseFloat(response.data.m_fPlaca).toFixed(2),uloga:response.data.m_sUloga,godinaStaza:Number(response.data.m_nGodinaStaza)};
    }),function(response){
    };
  }
  //-----------------------------Popunjavanje inputa forme za ažuriranje artikla---------------------------------------------
  $scope.ArtiklAzurirajForma=function(ArtiklId){
    oArtiklAzuriraj={idArtikla:ArtiklId};
    $http({
      url: "./crud/Artikl/readOne.php",
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
    const naziv=document.getElementById("updateNazivArtikla");
    const opis=document.getElementById("updateOpisArtikla");
    const kolicina=document.getElementById("updateKolicinaArtikl");
    const cijena=document.getElementById("updateCijenaArtikla");
    const kategorija=document.getElementById("odabirKategorije");
    azurirajArtikl=true;
    if($scope.oArtiklForma.naziv.trim()==""){
      PostaviGresku(naziv,"Naziv ne može biti prazan");
      azurirajArtikl=false;
    }
    else{
      PostaviValjano(naziv);
    }
    if($scope.oArtiklForma.opis.trim()==""){
      PostaviGresku(opis,"Opis ne može biti prazan");
      azurirajArtikl=false;
    }
    else{
      PostaviValjano(opis);
    }
    if(!(/^\d+$/.test(parseInt($scope.oArtiklForma.kolicina) || isNaN(parseInt($scope.oArtiklForma.kolicina))))){
      PostaviGresku(kolicina,"Količina ne može biti prazna");
      azurirajArtikl=false;
    }
    else{
      PostaviValjano(kolicina);
    }
    if(!(/^[0-9]*\.[0-9]{2}$/gi.test(parseFloat($scope.oArtiklForma.cijena).toFixed(2)))){
      PostaviGresku(cijena,"Cijena mora iznositi broj");
      azurirajArtikl=false;
    }
    else{
      PostaviValjano(cijena);
    }
    if(azurirajArtikl){
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
  $scope.oModalPotvrda={headerModala:"Brisanje artikla",bodyModala:"obrisati artikl"};
  const buttonObrisi = $compile('<button type="button" class="btn btn-primary" ng-click="Brisanje('+idArtikla+')" data-dismiss="modal">Obriši</button>')($scope);
  $('#funkcijaModala').empty();
  angular.element(document.querySelector('#funkcijaModala').append(buttonObrisi[0]));
  $scope.artiklObrisi={nIdArtikla:idArtikla,sNazivArtikla:nazivArtikla};
  }

  //-------------spremanje odabranog opisa artikla u scope varijablu----------------------
  $scope.OpisArtikla=function(opis){
    $scope.opisArtikla=opis;
  }

  $(document).on('click', '#gumbKupi', function(){
    $scope.provjeraKolicine=parseInt($("#unosKolicine").val());
  });
  //------------spremanje dostupne količine artikla u scop varijablu-------------------------
  $(document).on('input','#unosKolicine',function(){
   $scope.provjeraKolicine=parseInt($("#unosKolicine").val());
   if($scope.vStavke.length>0){
    $scope.vStavke.forEach(element => {
      if(element.m_nIdArtikla==$scope.oArtikl.idArtikla){
        $scope.odabranaKolicinaStavkeRacun=parseInt(element.odabranaKolicina);
        postojiArtiklNaRacunu=true;
      }
    });
    $scope.odabranaKolicinaStavkeRacun=parseInt($scope.odabranaKolicinaStavkeRacun);
    $scope.rezultat=$scope.odabranaKolicinaStavkeRacun+$scope.provjeraKolicine;
  }
  });  

  $scope.KvantitetaArtikla=function(kvantiteta,artiklID){
    $scope.kvantitetaArtikla=parseInt(kvantiteta);
    $scope.oArtikl={idArtikla:artiklID};
  }
  //----------------spremanje artikla u košaricu automatski izračunavajući ukupnu cijenu artikla-----------------------------
  $scope.Kupi=function()
  {
    var kosarica = $('#cart');
    $http({
      url: "./crud/Artikl/readOne.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify($scope.oArtikl)
    }).then(function(response){
      response.data.odabranaKolicina=parseInt($("#unosKolicine").val().replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
      response.data.ukupnaCijena=Number.parseFloat($("#unosKolicine").val()*parseFloat(response.data.m_fJdCijenaArtikla)).toFixed(2);
      $scope.vStavke.push(response.data);
      $scope.ukupnaCijenaRacuna=0;
      $scope.ukupnaCijenaRacuna=parseFloat($scope.ukupnaCijenaRacuna);
      $scope.vStavke.forEach(x => {
      $scope.ukupnaCijenaRacuna+=parseFloat(x.ukupnaCijena);
      $('#tablicaArtikli > tbody  > tr').each(function(index, tr) { 
        if(x.m_nIdArtikla==tr.id){
          $(tr).find('td #gumbKupi').addClass("onemoguciGumb");
          $(tr).find('.celijaKupi').addClass("cursorNotAllowed");
        }
     });
      
    }); 
      $scope.ukupnaCijenaRacuna=$scope.ukupnaCijenaRacuna.toFixed(2);
      var kolicinaKosarice = parseInt($scope.vStavke.length);
      kosarica.attr('data-totalitems',kolicinaKosarice);
    }),function(response){

    };
  };
  obrisan=false;
  $scope.$on('$routeChangeStart', function($event, next, current) { 
    if(next.$$route.templateUrl=="templates/potkategorije.html" ){
      if(obrisan==true){
        $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));
      }
    }
    $scope.init();
  });
  //------------------------inicijaliziranje tablice artikala ispisanih po odabranoj kategoriji-----------------------------
  $scope.PosaljiIdPotkategorije=function(idPotkategorije){
    obrisan=false;
  oPotkategorija={potkategorijaID:idPotkategorije};
    $http({
      url: "./crud/Artikl/readArtikliPotkategorije.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oPotkategorija)
    }).then(function(response){
      $scope.kategorijaArtikla=response.data[0].m_nIdPotkategorijaArtikla;
      if($scope.vArtikliPotkategorije.length>0 && obrisan==false){
        $('#tablicaArtikli').DataTable().clear().destroy();
        obrisan=true;
      }
      $scope.vArtikliPotkategorije=response.data;
      $window.localStorage.setItem("potkategorija",idPotkategorije);
      $timeout(function () {
        $('#tablicaArtikli').DataTable({
            "searching": true,
            "lengthMenu": [ [10,25,50,-1], [10,25,50,"All"] ],
            columnDefs: [ { orderable: false, targets: [5,6,7] }, { searchable: false, targets: [5,6,7] } ]
          }); 
    }); 
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
    if($window.localStorage.getItem("email")==null || $window.localStorage.getItem("kljuc")==null){
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
      url: "./crud/Zaposlenik/readOne.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oLocalStorage)
    }).then(function(response){
        $scope.oOsoba={...response.data};
    }),function(response){
    };
  }
  // Statistika artikala
  $scope.Statistika=function(){
    $scope.statistikaUkArtikala=$scope.vArtikli.length;
    $scope.statistikaNeaktivniArtikli=$scope.vNeaktivniArtikli.length;
    // $scope.statistikaNajtrazenijiArtikl=$scope.DajNajtrazenijiArtikl(); /TODO
    $scope.statistikaBrojZaposlenika=$scope.vZaposlenici.length;
    IzracunajZaradu();
  };

  // Izracunavanje ukupne zarade sa svih racuna
  function IzracunajZaradu(){
    var ukZarada=0;
    $http({
      url:'./crud/Racun/read.php',
      method:'GET'
    }).then(function(response){
        $scope.vRacuni=response.data;
        console.log($scope.vRacuni[0].m_fUkupanIznos);
    for(var i=0;i<$scope.vRacuni.length;i++){
      ukZarada+=parseFloat($scope.vRacuni[i].m_fUkupanIznos);
    }
    $scope.statistikaZarada=ukZarada.toFixed(2);
    }),function(response){
  };
  };

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

  function DohvatiArtiklePoKategoriji(idPotkategorije,parentCategoryID){
    oPotkategorija={potkategorijaID:idPotkategorije};
    $http({
      url: "./crud/Artikl/readArtikliPotkategorije.php",
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(oPotkategorija)
    }).then(function(response){
      console.log(response.data.length);
      $scope.countArtikli=response.data.length; 
    }),function(response){
    };
  }
  //------------skup GET zahtjeva za dohvaćanje podataka iz baze------------------------
  $q.all([
      $http.get("./crud/Kategorija/kategorija.php"),
      $http.get("./crud/Artikl/read.php"),
      $http.get("./crud/Kategorija/potkategorija.php"),
      $http.get("./crud/Zaposlenik/read.php"),
      $http.get("./crud/Artikl/readNeaktivniArtikli.php")
    ]).then(function(results) {
        $scope.vKategorije=results[0].data;
        $scope.vArtikli=results[1].data;
        $scope.vPotkategorije=results[2].data; 
        $scope.vZaposlenici=results[3].data;
        $scope.vNeaktivniArtikli=results[4].data;
        if($window.localStorage.getItem("potkategorija")!="" && $window.localStorage.getItem("potkategorija")!=null){
          $scope.PosaljiIdPotkategorije($window.localStorage.getItem("potkategorija"));   
         }
         for(var j=0;j<$scope.vPotkategorije.length;j++){
            DohvatiArtiklePoKategoriji($scope.vPotkategorije[j].m_nId,$scope.vPotkategorije[j].m_nParentCategoryId);
         }
         console.log($scope.countArtikli);
         $scope.dataSource = {
          "chart": {
              "caption": "Artikli po kategorijama",
              "subCaption": "Broj artikala na svakoj kategoriji",
              "xAxisName": "Kategorija",
              "yAxisName": "Broj artikala",
              "theme": "fusion",
          },
          "data": (function() {
            var data = [];
        
            for (var i = 0; i < $scope.vKategorije.length; i++) {
              // for(var j = 0; j < $scope.vKategorije[i].m_oPotkategorije.length;j++){
                data.push({
                    "label": $scope.vKategorije[i].m_sNazivCategory,
                    "value": $scope.countArtikli               
                })
            // }
          }
        
            return data;
        })()
      };
    });
  
  //-----------------API za dohvacanje neaktivnih artikala iz baze----------------
  $scope.DohvatiNeaktivneArtikle=function(){
      if($scope.vNeaktivniArtikli.length>0){
        $('#tablicaNeaktivniArtikli').DataTable().clear().destroy();
      }
      $timeout(function(){
        $('#tablicaNeaktivniArtikli').DataTable({
        "searching": true,
        "lengthMenu": [[10,25,50,-1], [10,25,50,"All"]],
        columnDefs: [ { orderable: false, targets: [4] }, { searchable: false, targets: [4] } ]
        });
      });
  }
  //-----------------API za dohvacanje racuna iz baze--------------------------
  $scope.DohvatiRacune=function(){
    $http({
      url:'./crud/Racun/read.php',
      method:'GET'
    }).then(function(response){
        if($scope.vRacuni.length>0){
          $('#tablicaRacuni').DataTable().clear().destroy();
        }
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

function PostaviGresku(element,poruka){
  const formGrupa=element.parentElement;
  const tekst=formGrupa.querySelector('small');
  formGrupa.className='form-group error';
  tekst.innerText=poruka;
  }
  
function PostaviValjano(poruka) {
  const formGrupa = poruka.parentElement;
  formGrupa.className = 'form-group success';
  }