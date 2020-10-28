(function() {
  // --- Copyright | Please, don't touch this. Thank you!
  console.log('%cDevelopment by Yehor Kalnoi — https://www.linkedin.com/in/meljes/', 'color: blue');
  document.head.appendChild(
    document.createComment(' Development by Yehor Kalnoi — https://www.linkedin.com/in/meljes/ ')
  );

  // --- Back to top
  let backTop = document.getElementsByClassName('back-to-top')[0],
      offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
      offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      scrollDuration = 400,
      scrolling = false;

  if (backTop) {
    // Update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
      }
    });

    // Smooth scroll to top
    backTop.addEventListener('click', function (event) {
      event.preventDefault();
      (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
    });
  }
  function checkBackToTop() {
    let windowTop = window.scrollY || document.documentElement.scrollTop;
    (windowTop > offset) ? Util.addClass(backTop, 'btt-is-visible') : Util.removeClass(backTop, 'btt-is-visible btt-fade-out');
    (windowTop > offsetOpacity) && Util.addClass(backTop, 'btt-fade-out');
    scrolling = false;
  }

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

    // headerScroll();
  });
  // window.addEventListener('scroll', headerScroll);
  // window.addEventListener('resize', resizeCheck);
})();
