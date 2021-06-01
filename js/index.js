 
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
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gumbPocetna.style.display = "block";
  } else {
    gumbPocetna.style.display = "none";
  }
}

  window.onscroll = function() {myFunction(),scrollFunction()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
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
  $("#modalPrijava").modal('show');
  $("#modalPrijava").mouseleave(function(){
    $("body").css("cursor", "not-allowed");
  });
  $("#modalPrijava").mouseenter(function(){
    $("body").css("cursor", "default");
  });
  $("#oPrijava").click(function(){
    $("#modalPrijava").off("mouseenter mouseleave");
    $("body").css("cursor", "default");
  });
  $('#pocetna').on("click",function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
    });
});

});