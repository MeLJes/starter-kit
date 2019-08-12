var players = {};

if ($('[data-video-id]').length) {
  var ytApi = document.createElement('script');
  ytApi.src = 'https://www.youtube.com/player_api';
  ytApi.defer = true;
  $('body').append(ytApi);
}

function onYouTubeIframeAPIReady () {
  $('[data-video-id]').each(function () {
    var videoId = $(this).data('video-id');
    players[videoId] = new YT.Player(videoId, {
      videoId: videoId,
      playerVars: {
        showinfo: 0,
        rel: 0
      }
    });

    $(document).on('opened', '.modal-promo', function () {
      players[videoId].playVideo();
    });
    $(document).on('closing', '.remodal', function () {
      players[videoId].pauseVideo();
    });
  });
}
