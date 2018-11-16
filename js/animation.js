/* Animaton */
/* internet section */
$(window).scroll(function () {
  $('.internet_boosteroid img').each(function () {
    var elPosition = $(this).offset().top; //Позиция элемента
    var elHeight = $(this).height(); //Высота элемента
    var windowTop = $(window).scrollTop(); //Верх окна
    var windowHeight = $(window).height(); //Высота окна
    if (elPosition < windowTop + windowHeight - elHeight / 2) {
      $(this).addClass("animation fade-in-right");
    } //добавляет класс, когда элемент находится полностью в видимой области окна
    if (elPosition > windowTop + windowHeight) {
      $(this).removeClass("animation fade-in-right");
    } //убирает класс, когда элемент не виден в окне
    if (elPosition + elHeight < windowTop) {
      $(this).removeClass("animation fade-in-right");
    } //убирает класс, когда элемент не виден в окне
  });
});

/* boostore section*/
$(window).scroll(function () {
  $('.boostore_image img').each(function () {
    var elPosition = $(this).offset().top; //Позиция элемента
    var elHeight = $(this).height(); //Высота элемента
    var windowTop = $(window).scrollTop(); //Верх окна
    var windowHeight = $(window).height(); //Высота окна
    if (elPosition < windowTop + windowHeight - elHeight / 2) {
      $(this).addClass("animation fade-in-left");
    } //добавляет класс, когда элемент находится полностью в видимой области окна
    if (elPosition > windowTop + windowHeight) {
      $(this).removeClass("animation fade-in-left");
    } //убирает класс, когда элемент не виден в окне
    if (elPosition + elHeight < windowTop) {
      $(this).removeClass("animation fade-in-left");
    } //убирает класс, когда элемент не виден в окне
  });
});

/*footer animation */
$(window).scroll(function () {
  $('footer').each(function () {
    var elPosition = $(this).offset().top; //Позиция элемента
    var elHeight = $(this).height(); //Высота элемента
    var windowTop = $(window).scrollTop(); //Верх окна
    var windowHeight = $(window).height(); //Высота окна
    if (window.screen.availWidth <= 640) { // если разрешение дисплея меньша 640px, отобразить елемент и закончить выполнение кода.
      return $(this).css('visibility', 'visible');
    }
    if (elPosition < windowTop + windowHeight - elHeight / 2) {
      $(this).addClass("animation fade-in-up");
    } //добавляет класс, когда элемент находится полностью в видимой области окна
    if (elPosition > windowTop + windowHeight) {
      $(this).removeClass("animation fade-in-up");
    } //убирает класс, когда элемент не виден в окне
    if (elPosition + elHeight < windowTop) {
      $(this).removeClass("animation fade-in-up");
    } //убирает класс, когда элемент не виден в окне
  });
});