(function () {
  //Phone mask ----------
    function phoneMask(elem) {
        if ( $(elem).length ) {
            $(elem).mask("38(099)999-99-99");
        }
    }
    //Phone mask - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    phoneMask(elem);
  });
})();
