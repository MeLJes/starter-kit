(function () {
  //Smooth scroll ----------
  function smoothScroll() {
    var $root = $('html, body');
    var $link = $('a.smooth-scroll';

    if ( $link.length ) {
      $link.on('click', function(e) {
          e.preventDefault();
          $root.animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 500);
          return false;
      });
    }
  }
  //Smooth scroll - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    smoothScroll();
  });
})();
