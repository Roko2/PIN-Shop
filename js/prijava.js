$(document).ready(function(){
    $("#inptEmail").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#oPrijava").click();
    }
  });
  $("#inptLozinka").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#oPrijava").click();
    }
  });
})
var pcShopPrijava = angular.module('pcShopPrijava', []);

pcShopPrijava.controller('prijavaController', function ($scope, $http,$window) {
$scope.Login=function(){
    var sRow="<i class='fas fa-spinner fa-pulse fa-2x'></i>";
    $("#ucitavanjeIkona").append(sRow).hide().show('normal');
    $("#oPrijava").attr("disabled",true);
    $http({
        url: "./query/prijava.php",
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: getFormData($("#prijavaForma"))
    }).then(function(response) {
        if(response.data != ""){
            console.log(response.data);
            setTimeout(function(){
            const valja1=document.getElementById("inptLozinka");
            const valja2=document.getElementById("inptEmail");
            PostaviValjano(valja1);
            PostaviValjano(valja2);
            },1000)
            setTimeout(function () {
                 $window.localStorage.setItem("email",response.data.email);
                 $window.localStorage.setItem("kljuc",response.data.kljuc);
                 $window.localStorage.setItem("spol",response.data.spol==="1" ? "female":"male");
                 $window.location.href ='/PIN-Shop/index.html';
            }, 2000);
        }
        else if(response.data==""){
            const greska1=document.getElementById("inptLozinka");
            const greska2=document.getElementById("inptEmail");
            setTimeout(function () {
                PostaviGresku(greska2,"");
                PostaviGresku(greska1,"Neispravna Email adresa ili Lozinka!");
                $("#ucitavanjeIkona").empty();
                $("#oPrijava").attr("disabled",false);
            }, 2000);
        }
    }),function(response) {
    };
}
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

function getFormData($form){
var bezindexPolje = $form.serializeArray();
var indeksiranoPolje = {};

$.map(bezindexPolje, function(n, i){
    indeksiranoPolje[n['name']] = n['value'];
});

return indeksiranoPolje;
}
