var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      key: options.key,
      q: options.query,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: (data) => {
      callback(data.items);
    },
    dataType: 'json'
  });
};

window.searchYouTube = searchYouTube;
