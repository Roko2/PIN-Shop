 
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
  function StikiNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      $(".sadrzaj").css("padding-top","50px");
    } else {
      navbar.classList.remove("sticky");
      $(".sadrzaj").css("padding-top","0px");
    }
  }

  setTimeout(function () {
    $(function () {
      $('#tablicaArtikli').DataTable({
        // select: true,
        scrollY: 500,
        scrollX: "100%",
        // deferRender: true,
        //scrollY:     500,
        // responsive: false,
        // fixedHeader: {
        //    header: true,
        //    footer: true
        // },
        //  bAutoWidth: true,
      }); 
      $("#navIcon1").attr("class","fa fa-microchip mr-1 text-white");
      $("#navIcon2").attr("class","fa fa-desktop mr-1 text-white");
      $("#navIcon3").attr("class","fa fa-print mr-1 text-white");
      $("#navIcon4").attr("class","fa fa-database mr-1 text-white");
      $("#navIcon5").attr("class","fa fa-mouse mr-1 text-white");
      $("#navIcon6").attr("class","fa fa-network-wired mr-1 text-white");
      $("#navIcon7").attr("class","fa fa-laptop mr-1 text-white");
    });
  }, 100);

//   setTimeout(function () {
//     $(function () {
//  var table = $('#tablicaArtikli').DataTable();
//   table.columns.adjust();
//     });
    
//   }, 1000);

$(document).ready(function(){
  if(localStorage.getItem("email")==null){
    window.location.href="/PIN-Shop/prijava.html";
  }
  console.log(localStorage.getItem("email"));//dohvacanje
});

function PokaziPopup() {
    var popup = document.getElementById("Popup");
    popup.classList.toggle("show");
  }