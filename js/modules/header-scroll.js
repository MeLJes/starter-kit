(function () {
  //Header scroll ----------
  function headerStyle() {
      var offset = 50;
      var header = $('.header');

      if( $(this).scrollTop() > offset ) {
          header.addClass('on-scroll');
      } else {
          header.removeClass('on-scroll');
      }
  }
  //Header scroll - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    headerStyle();
  });
})();
