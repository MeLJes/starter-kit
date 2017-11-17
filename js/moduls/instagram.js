(function () {
  //Instagram ----------
  function instagram() {
      if ( $('#instafeed').length ) {
          var instafeedScript = document.createElement('script');
          instafeedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js';
          instafeedScript.onload = initInstafeed;
          document.head.appendChild(instafeedScript);

          function initInstafeed() {
              var feed = new Instafeed({
                  get: 'user',
                  clientId: '',
                  client_secret: '',
                  accessToken: '',
                  userId: '',
                  template: '<div class="media"><a href="{{link}}" class="" target="_blank"><img src="{{image}}" alt="Instagram photo" /></a></div>',
                  resolution: 'standard_resolution',
                  target: 'instafeed',
                  limit: 6
              });

              feed.run();
          }
      }
  }
  //Instagram - END ----------

  //Call function
  document.addEventListener("DOMContentLoaded", function(event) {
    instagram();
  });
})();
