
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "collapse show";

$(window).on("load resize", function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
     setTimeout(function(){
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
     },200);
    
  } 
else {
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
      
    });
  }, 100);

$(document).ready(function(){
  $(function() {
    $('.tooltip-wrapper').tooltip({position: "bottom"});
});
  var datum=new Date();
  var trenutnaGodina=datum.getFullYear();
  var row="<b>© Copyright "+trenutnaGodina+"</b>";
  $("#copyright").append(row);
  $("#vratiNaPocetnu").on('click',function(){
    window.location.href="#!/";
    // const cartButtons = document.querySelectorAll('.cart-button');
    // cartButtons.forEach(button => {
    // button.addEventListener('click',cartClick);
    // })
    // function cartClick(){
    // let button =this;
    // button.classList.add('clicked');
    // }
  });
 

$("#kosarica").mouseenter(function(){
  $("#cart").addClass("pomakniGumbBrojac");
});

$("#kosarica").mouseleave(function(){
  $("#cart").removeClass("pomakniGumbBrojac");
});
});

function ProsiriOpis(){
  var prozor=document.getElementById("opisArtikla");
  prozor.classList.toggle("show");
}  

$(window).on('show.bs.modal', function() { 
  $("body").css("overflow-y","hidden");
  $("#unosKolicine").val(1);
});
$(window).on('hide.bs.modal', function() { 
  $("body").css("overflow-y","scroll");
  setTimeout(function(){
  $("#unosKolicine").val(1);
  },300);
  
});
