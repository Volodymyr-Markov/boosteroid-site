(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.getElementById('toggle');

    /*Scroller*/
    $(function () {
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });
    });

    //Set bullest between words in main header(h1)
    let slogan = document.getElementsByTagName('h1')[0];
    slogan.innerText = slogan.innerText.replace(/ /g, '\u2027');

    let image = document.getElementsByClassName('boostore_image')[0].querySelector('img');
    let light = image.getAttribute("src");
    let dark = image.dataset.src;

    //Toggle theme
    if (toggle) {
      toggle.addEventListener('click', function () {
        let boostoreSection = document.getElementById('boostore');
        let mainPage = document.getElementById('slogan');
        let gaming = document.getElementById('gaming') || null;
        let boostoreHeader = document.getElementsByClassName('boostore_content')[0].querySelector('h3');
        let changeTheme = toggle.checked;

        if (!changeTheme) {

          mainPage ? mainPage.className = "dark_bg" : null;
          gaming ? gaming.className = "dark_bg" : null;

          boostoreSection.className = "boostore_dark";
          boostoreHeader.style.color = "white";
          image.src = dark;
        } else {

          mainPage ? mainPage.className = "light_bg" : null;
          gaming ? gaming.className = "light_bg" : null;

          boostoreSection.className = "boostore_light";
          boostoreHeader.style.color = "#1B1B27";
          image.src = light;
        }
      })
    };

    // Toggle view of burger menu
    $(document).ready(function ($) {
      $('.mobile_burger_menu').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggle();
      });

      $(window).resize(function () {
        toggleMenu();
      });
      toggleMenu();

      function toggleMenu() {
        let width = document.body.clientWidth;
        if (width < 768) {
          $('.menu').css('display', 'none');
        } else if (width >= 768) {
          $('.menu').css('display', 'flex');
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
        p.innerText = p.innerText.slice(0, 50) + " ..." :
        p.innerText = p.innerText;
    })
  }
}())