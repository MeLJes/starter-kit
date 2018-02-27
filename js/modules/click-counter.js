(function () {
  //Item counter ----------
  function itemCounter(elem, minus, plus) {
    if ( $(elem).length ) {
      //Minus
      $(minus).click(function() {
          var $input = $(this).parent().find('input');
          var count = parseInt($input.val()) - 1;
          count = count < 1 ? 1 : count;
          $input.val(count);
          $input.change();
          return false;
      });

      //Plus
      $(plus).click(function() {
          var $input = $(this).parent().find('input');
          $input.val(parseInt($input.val()) + 1);
          $input.change();
          return false;
      });
    }
  }
  //Item counter - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    itemCounter(elem, minus, plus);
  });
})();
