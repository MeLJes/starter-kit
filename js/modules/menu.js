(function () {
  //Mobile menu ----------
  function mobileMenu() {
      //Buttons
      var menuToggle = $('.menu-toggle');
      var barToggle = $('.cart-toggle');
      var userToggle = $('.user-toggle');
      //All toggles
      var allToggles = $('.menu-toggle, .cart-toggle, .user-toggle');
      //Panels
      var menuPanel = $('.menu');
      var toolbarPanel = $('.cart-panel');
      var userPanel = $('.user-panel');
      //Close panel
      var closePanel = $('.close-panel');
      //All elements
      var allElements = $('.menu-toggle, .menu, .cart-toggle, .cart-panel, .user-toggle, .user-panel, .close-panel');

      // -----

      //Class switcher
      function classSwitcher(item, otherItem, extraItem, panel, otherPanel, extraPanel) {
          item.toggleClass('active');
          panel.toggleClass('active');
          closePanel.toggleClass('active');

          //Remove active class from other toggles
          if ( otherItem.hasClass('active') || extraItem.hasClass('active') ) {
              otherItem.removeClass('active');
              extraItem.removeClass('active');
          }
          //Remove active class from other panels
          if ( panel.hasClass('active') ) {
              otherPanel.removeClass('active');
              extraPanel.removeClass('active');
          }
          //Remove active class from close panel
          if ( item.hasClass('active') || otherItem.hasClass('active') || extraItem.hasClass('active') ) {
              closePanel.addClass('active');
          } else if ( !allToggles.hasClass('active') ) {
              closePanel.removeClass('active');
          } else {
              closePanel.removeClass('active');
          }
      }

      // -----

      //Menu
      menuToggle.on('click', function () {
          classSwitcher(menuToggle, barToggle, userToggle, menuPanel, toolbarPanel, userPanel);
      });

      //Bar
      barToggle.on('click', function () {
          classSwitcher(barToggle, menuToggle, userToggle, toolbarPanel, menuPanel, userPanel);
      });

      //User
      userToggle.on('click', function () {
          classSwitcher(userToggle, barToggle, menuToggle, userPanel, toolbarPanel, menuPanel);
      });

      //Close panel (outside)
      closePanel.on('click', function () {
          allElements.removeClass('active');
      });
  }
  //Mobile menu - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    mobileMenu();
  });
})();
