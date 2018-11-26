$(document).ready(function () {
  $('.top_products').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    draggable: true,
    focusOnSelect: true,
    mobileFirst: true,
    swipeToSlide: true
  });
});