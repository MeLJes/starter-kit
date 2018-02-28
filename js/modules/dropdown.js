(function () {
  //Dropdown ----------
  function dropdown() {
      if ( $('.js-dropdown').length ) {
          (function($, window, document, undefined) {
              'use strict';
              var $html = $('html');

              $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
                  e.preventDefault();
                  $('.js-dropdown').not($(this)).each(function () {
                      $(this).removeClass('is-open');
                  });
                  $(this).toggleClass('is-open');
              });
              $html.on('click.ui.dropdown', '.js-dropdown_item', function(e) {
                  e.preventDefault();
                  console.log('--');
                  setTimeout(function(){
                      $('.js-dropdown').each(function () {
                          $(this).removeClass('is-open');
                      });
                  },100);
              });
              $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
                  e.preventDefault();
                  var $item = $(this);
                  var $dropdown = $item.parents('.js-dropdown');
                  $dropdown.find('.js-dropdown_input').val($item.data('dropdown-value'));
                  $dropdown.find('.js-dropdown_current').html($item.html());
              });
              $html.on('click.ui.dropdown', function(e) {
                  var $target = $(e.target);
                  if (!$target.parents().hasClass('js-dropdown')) {
                      $('.js-dropdown').removeClass('is-open');
                  }
              });
          })(jQuery, window, document);
      }
  }
  //Dropdown - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    dropdown();
  });
})();
