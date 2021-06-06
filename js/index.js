
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "collapse show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $(".dropdown").hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($(".dropdown-toggle")).attr("aria-expanded", "true");
        $this.find($(".dropdown-menu")).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($(".dropdown-toggle")).attr("aria-expanded", "false");
        $this.find($(".dropdown-menu")).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

var gumbPocetna = document.getElementById("pocetna");
function SkrolFunkcija() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gumbPocetna.style.display = "block";
  } else {
    gumbPocetna.style.display = "none";
  }
}

$('#pocetna').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

  window.onscroll = function() {StikiNavbar(),SkrolFunkcija()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  if (window.matchMedia('(min-width: 960px)').matches) {
    function StikiNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        $(".sadrzaj").css("padding-top","50px");
      } else {
        navbar.classList.remove("sticky");
        $(".sadrzaj").css("padding-top","0px");
      }
    }
}

  setTimeout(function () {
    $(function () {
      $("#navIcon1").attr("class","fa fa-microchip mr-1 text-white");
      $("#navIcon2").attr("class","fa fa-desktop mr-1 text-white");
      $("#navIcon3").attr("class","fa fa-print mr-1 text-white");
      $("#navIcon4").attr("class","fa fa-database mr-1 text-white");
      $("#navIcon5").attr("class","fa fa-mouse mr-1 text-white");
      $("#navIcon6").attr("class","fa fa-network-wired mr-1 text-white");
      $("#navIcon7").attr("class","fa fa-laptop mr-1 text-white");
    });
  }, 100);

$(document).ready(function(){
  document.querySelector("#unosKolicine").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
  });
  $("#unosKolicine").keydown(function(){ 
   if(!(/^[0-9]+$/g.test())){
    $("#unosKolicine").keyup(function(){
    var Unos=$("#unosKolicine").val();
    //  console.log(Unos);
    if(Number(Unos)<=0){
      $("#kupiArtikl").attr("disabled", true);
    }
    else{
      $("#kupiArtikl").attr("disabled", false);
    }
  });

   }
  });
 

  $("#vratiNaPocetnu").on('click',function(){
    window.location.href="#!/";
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach(button => {
    button.addEventListener('click',cartClick);
    })
    function cartClick(){
    let button =this;
    button.classList.add('clicked');
    }
  });
 

$("#kosarica").mouseenter(function(){
  $("#cart").addClass("pomakniGumbBrojac");
});

$("#kosarica").mouseleave(function(){
  $("#cart").removeClass("pomakniGumbBrojac");
});
});

function PokaziPopup() {
    var popup = document.getElementById("Popup");
    popup.classList.toggle("show");
  }

function ProsiriOpis(){
  var prozor=document.getElementById("opisArtikla");
  prozor.classList.toggle("show");
}  

$(window).on('show.bs.modal', function() { 
  $("body").css("overflow-y","hidden");
});
$(window).on('hide.bs.modal', function() { 
  $("body").css("overflow-y","scroll");
});