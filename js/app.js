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
function getFormData($form){
  var bezindexPolje = $form.serializeArray();
  var indeksiranoPolje = {};

  $.map(bezindexPolje, function(n, i){
    indeksiranoPolje[n['name']] = n['value'];
  });

  return indeksiranoPolje;
}

pcShop.controller('mainController', function ($scope,$q, $http) {
    $scope.vKategorije = [];
    $scope.oArtikli=[];
    $scope.oZaposlenik;
    $scope.Odjava=function(){
      $("#Odjava").css("display","none");
      $("#modalPrijava").modal('show');
      $(this).closest('#modalPrijava').find("input[type=text], input[type=password]").val("");
    }
    $scope.Login=function(){
         $http({
          url: "./query/prijava.php",
          method: "POST",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: getFormData($("#prijavaForma"))
      }).then(function(response) {
          if(response.data != ""){
            var sRow="<i class='fas fa-spinner fa-pulse fa-2x'></i>";
            $("#ucitavanjeIkona").append(sRow).hide().show('normal');
              setTimeout(function () {
                $("#modalPrijava").modal('hide');
                $("#Odjava").css("display","block");
            }, 2000);
          }
          else if(response.data==""){
            var sRow="<i class='fas fa-spinner fa-pulse fa-2x'></i>";
            $("#ucitavanjeIkona").append(sRow).hide().show('normal');
              setTimeout(function () {
                const greska1=document.getElementById("inptLozinka");
                const greska2=document.getElementById("inptEmail");
                PostaviGresku(greska2,"");
                PostaviGresku(greska1,"Neispravna Email adresa ili Lozinka!");
                $("#ucitavanjeIkona").css("display","none");
            }, 2000);
          }
      }),function(response) {
      };
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