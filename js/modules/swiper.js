(function () {
  //Swiper ----------
  function sliders(element, dots) {
    if ( $(element).length ) {
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
  //Swiper - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    sliders(element, dots);
  });
})();
