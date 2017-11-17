(function () {
  //AOS ----------
  function aos() {
      if ( $('[data-aos]').length ) {
          AOS.init({
              //duration: 600,
              //disable: window.innerWidth < 1200
          });
      }
  }
  //AOS - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    aos();
  });
})();
