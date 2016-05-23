$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$(".header").on("sticky-start", function() {
  $(".description").html("We build <strong>great</strong> apps!");
})

$(".header").on("sticky-end", function() {
  $(".description").html("We build great apps");
})

$("#question").sticky({
  topSpacing: 63,
  getWidthFrom: ".container",
  responsiveWidth: true
});

$("#question").on("sticky-start", function() {
  $(this).html("Want us to work on your project? <a>Email us</a>");
})

$("#question").on("sticky-end", function() {
  $(this).html("Want us to work on your project?");
})
