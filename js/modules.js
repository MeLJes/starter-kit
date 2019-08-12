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
})();
