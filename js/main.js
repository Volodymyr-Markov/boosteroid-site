(function () {
  document.addEventListener('DOMContentLoaded', function () {

    let toggle = document.getElementById('toggle');
    //fadein efect for header and background
    if ($(document).scrollTop() + $(window).height() > $('#slogan').offset().top && $(document).scrollTop() - $('#slogan').offset().top < $('#slogan').height()) {
      $('header, .scroller>a').delay(300).animate({
        'opacity': '1'
      }, 1000);
      $('.slogan_wrap>img').delay(1500).animate({
        'opacity': '1'
      }, 1500);
    } else {
      $('header, .scroller>a').css({
        'opacity': '1'
      });
      $('.slogan_wrap>img').css({
        'opacity': '1'
      });
    }

    //sticky header
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1) {
        $('header').addClass('sticky');
        $('#slogan').css({
          'height': '100vh',
          'padding-top': '76px'
        });
      } else {
        $('header').addClass('sticky');
      }
    });


    /*Scroller*/
    $(function () {
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
      });
    });

    //Set bullest between words in main header(h1)
    let slogan = document.getElementsByTagName('h1')[0];
    slogan.innerText = slogan.innerText.replace(/ /g, '\u2027');
    // sloganText = document.getElementsByClassName("slogan_wrap")[0].querySelector("p").style.textTransform = "lowercase";

    let image, light, dark;
    let boostoreImage = document.getElementById('boostore');
    boostoreImage ? image = boostoreImage.querySelector('img') : null;

    image ? (light = image.getAttribute("src"), dark = image.dataset.src) : null;

    //Toggle theme
    if (toggle) {
      toggle.addEventListener('click', function () {
        let boostoreSection = document.getElementById('boostore');
        let boostoreHeader = document.getElementsByClassName('boostore_content')[0].querySelector('h3');
        let changeTheme = toggle.checked;

        if (changeTheme) {

          boostoreSection.className = "boostore_light";
          boostoreHeader.style.color = "#1B1B27";
          image.src = dark;

        } else {

          boostoreSection.className = "boostore_dark";
          boostoreHeader.style.color = "white";
          image.src = light;
        }
      })
    };

    //Hide menu when user click on .submenu_header

    //Hide menu when appear OUR SOLUTION section
    $('.submenu_header').click(function () {
      $('.submenu').slideToggle(400);
      $('.submenu_header').toggleClass('pointer_up');
    });

    // Toggle view of burger menu
    $(document).ready(function ($) {
      $('.mobile_burger_menu').click(function () {
        $(this).toggleClass('open');
        $('nav>ul').toggle();
      });

      $(window).resize(function () {
        toggleMenu();
      });
      toggleMenu();

      function toggleMenu() {
        let width = document.body.clientWidth;
        if (width < 768) {
          $('nav>ul').css('display', 'none');
          $('.submenu').css('display', 'none');
        } else if (width >= 768) {
          $('nav>ul').css('display', 'flex');
        };
      };
    });
  })

  //trim text in tabs (our solutios)
  let textContainer = document.getElementsByClassName("solutions_container")[0];
  if (textContainer) {
    let textArray = textContainer.querySelectorAll("p");
    textArray.forEach((p) => {
      p.innerText.length > 70 ?
        p.innerText = p.innerText.slice(0, 100) + " ..." :
        p.innerText = p.innerText;
    })
  }

  $(function(){
    $('#subscribe input').data('holder',$('#subscribe input').attr('placeholder'));
    $('#subscribe input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('#subscribe input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
    $('#subscribe').submit(function(event){ //temporary
      event.preventDefault();
      return false;
  });
})


}())