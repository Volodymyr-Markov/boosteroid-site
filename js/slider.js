function createSlick(){  

	$(".top_products").not('.slick-initialized').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    focusOnSelect: true,
    centerPadding: '50px 20px',
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 2560,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        centerPadding: '50px 20px',
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px'
      }
    }
  ]
});	

}

createSlick();

$(window).on( 'resize', createSlick );