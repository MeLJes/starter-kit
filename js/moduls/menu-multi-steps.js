(function () {
  //Mobile menu ----------
  function mobileMenu() {
      if( $('.header-mobile').length ) {
          //Buttons
          var menuToggle = $('#toggle-menu');
          var barToggle = $('#toggle-bar');
          //Panels
          var menuPanel = $('.panel.menu');
          var toolbarPanel = $('.panel.toolbar');
          //Close panel
          var closePanel = $('.close-panel');

          //Class switcher
          function classSwitcher(item, otherItem, panel, otherPanel) {
              item.toggleClass('active');
              panel.toggleClass('active');
              closePanel.toggleClass('active');

              //Remove active class from second toggle
              if ( otherItem.hasClass('active') ) {
                  otherItem.removeClass('active');
              }
              //Remove active class from second panel
              if ( panel.hasClass('active') ) {
                  otherPanel.removeClass('active');
              }
          }

          // -----

          //Second level switcher
          var menuMain = $('.panel.menu ul.first-lvl');
          var nextButton = $('.next-icon, .next-text');
          var prevButton = $('.prev-icon');
          var secondLvlHolder = $('.second-lvl-holder');

          nextButton.on('click', function () {
              $(this).next('.second-lvl-holder').toggleClass('active');
              menuMain.toggleClass('second-lvl-active');
          });
          prevButton.on('click', function () {
              $(this).closest('.second-lvl-holder').toggleClass('active');
              menuMain.toggleClass('second-lvl-active');
          });

          //Check active items if menu close
          function removeActiveClassInside(panel, menu) {
              if( !panel.hasClass('active') ) {
                  menu.removeClass('second-lvl-active');
                  secondLvlHolder.removeClass('active');
              }
          }

          // -----

          //Menu
          menuToggle.on('click', function () {
              classSwitcher(menuToggle, barToggle, menuPanel, toolbarPanel);
              removeActiveClassInside(menuPanel, menuMain);
          });

          //Bar
          barToggle.on('click', function () {
              classSwitcher(barToggle, menuToggle, toolbarPanel, menuPanel);
              removeActiveClassInside(menuPanel, menuMain);
          });

          //Close panel (outside)
          closePanel.on('click', function () {
              $('#toggle-menu, .panel.menu, #toggle-bar, .panel.toolbar, .close-panel').removeClass('active');
              removeActiveClassInside(menuPanel, menuMain);
          });
      }
  }
  //Mobile menu - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    mobileMenu();
  });
})();
