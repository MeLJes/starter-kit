(function () {
  //Remove something ----------
  function elementRemove() {
      var something = $('.something');

      if( something.length ) {
          something.on('click', 'button', function (e) {
              something.fadeOut();
          });
      }
  }
  //Remove something - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    elementRemove();
  });
})();
