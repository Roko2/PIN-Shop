 
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "collapse show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $(".dropdown").hover(
      function() {
        console.log("da");
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