(function () {
  // --- Helper functions
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // --- Checks
  let resizeCheck = debounce(function () {
    // --- Menus
    document.getElementById('menu-toggle').classList.remove('active');
    document.getElementById('menu-panel').classList.remove('active');
    document.querySelectorAll('.menu-panel li').forEach(function (item) {
      item.classList.remove('show');
    });
  }, 50);

  let headerScroll = debounce(function () {
    window.pageYOffset > 50
      ? document.getElementById('header').classList.add('on-scroll')
      : document.getElementById('header').classList.remove('on-scroll')
  }, 50);

  // --- Main
  document.addEventListener('DOMContentLoaded', () => {
    // --- Menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function () {
      this.classList.toggle('active');
      document.getElementById('menu-panel').classList.toggle('active');

      // Menu items
      if (this.classList.contains('active')) {
        document.querySelectorAll('.menu-panel li').forEach(function (item, index) {
          setTimeout(function () {
            item.classList.toggle('show');
          }, 100 * (index + 1));
        });
      } else {
        document.querySelectorAll('.menu-panel li').forEach(function (item, index) {
          setTimeout(function () {
            item.classList.remove('show');
          }, 100 * (index + 1));
        });
      }
    });
  });

  // --- Events
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

    headerScroll();
  });
  window.addEventListener('scroll', headerScroll);
  window.addEventListener('resize', resizeCheck);
})();
