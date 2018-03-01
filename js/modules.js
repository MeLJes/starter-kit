function headerScroll() {
  $(this).scrollTop() > 50
    ? $('.header').addClass('on-scroll')
    : $('.header').removeClass('on-scroll');
}


function smoothScroll() {
  if ($('a.smooth-scroll').length) {
    $('a.smooth-scroll').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }
}


function initMap() {
  var unit = { lat: 50.4645645, lng: 30.4634125 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: unit
  });
  var marker = new google.maps.Marker({
    position: unit,
    map: map
  });
}


function phoneMask(elem) {
  if ($(elem).length) {
    $(elem).mask('38(099)999-99-99');
  }
}


function elementRemove(initiator, elem) {
  if (elem.length) {
    $(initiator).on('click', 'button', function () {
      $(elem).fadeOut();
    });
  }
}


function sliders(element, dots) {
  if ($(element).length) {
    var sliders = new Swiper(element, {
      effect: 'fade',
      pagination: dots,
      paginationClickable: true,
      slidesPerView: 1,
      slidesPerColumn: 1,
      simulateTouch: false,
      loop: true,
      autoplay: 3000,
      speed: 900,
      spaceBetween: 0
    });
  }
}


function aos() {
  if ($('[data-aos]').length) {
    AOS.init({
      //duration: 600,
      //disable: window.innerWidth < 1200
    });
  }
}


if ($('#instafeed').length) {
  var instafeedScript = document.createElement('script');
  instafeedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js';
  instafeedScript.onload = initInstafeed;
  document.head.appendChild(instafeedScript);

  function initInstafeed() {
    var feed = new Instafeed({
      get: 'user',
      clientId: '',
      client_secret: '',
      accessToken: '',
      userId: '',
      template: '<div class="media"><a href="{{link}}" class="" target="_blank"><img src="{{image}}" alt="Instagram photo" /></a></div>',
      resolution: 'standard_resolution',
      target: 'instafeed',
      limit: 6
    });

    feed.run();
  }
}
