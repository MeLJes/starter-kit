(function () {
  //Back to top ----------
  function backToTop() {
      var offset = 300,
          offset_opacity = 1200,
          scroll_top_duration = 700,
          $back_to_top = $('.back-to-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
          ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btt-is-visible') : $back_to_top.removeClass('btt-is-visible btt-fade-out');
          if( $(this).scrollTop() > offset_opacity ) {
              $back_to_top.addClass('btt-fade-out');
          }
      });

      //smooth scroll to top
      $back_to_top.on('click', function(event){
          event.preventDefault();
          $('body,html').animate({
                  scrollTop: 0
              }, scroll_top_duration
          );
      });
  }
  //Back to top - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    backToTop();
  });
})();
