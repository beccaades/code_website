$(function(){
  $(".colorize").hide();
  $(".quote").click(function(){
    $(".colorize").toggle(300);
  });

  $('.slides').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});