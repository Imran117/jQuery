$(".ask").click((e) => {
  e.preventDefault();
  $(".answer").stop(true).slideUp(500);
  $(".ask").removeClass("active");
  $(e.target).addClass("active").next().stop(true).slideToggle(500);
});

$(".js-filter").click((e) => {
  e.preventDefault();
  $(".js-filter-card").removeClass("active").slideUp(500);
  $(e.target).attr("data-filter") === "all"
    ? $(".js-filter-card").addClass("active").stop(true).slideDown(500)
    : $(`[data-filter=${$(e.target).attr("data-filter")}]`)
        .addClass("active")
        .stop(true)
        .slideDown(500);
});

$(".js-modal-show").click((e) => {
  e.preventDefault();
  $(".modal").fadeIn(500);
});

$(".close, #submit").click((e) => {
  e.preventDefault();
  $(".modal").fadeOut(500);
});

$(window).scroll((e) => {
  window.scrollY > 500
    ? $(".js-btn-top").css("bottom", "30px").removeClass("hidden")
    : $(".js-btn-top").css("bottom", "-100%").addClass("hidden");
});

$(".js-btn-top").click((e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    {
      duration: 5000,
      scrollTop: "swing",
    }
  );
});

$("#menu-button").click((e) => {
  $("#menu").toggleClass('open');
});
