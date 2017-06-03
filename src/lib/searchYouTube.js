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
        //take the ids from data
        //call search video
          //pass in callback to set the state
      console.log('search', data);
      var ids = data.items.map(function(item) {
        return item.id.videoId;
      }).join(',');

      var option = {
        key: options.key,
        id: ids
      };
      searchVideo(option, callback);     


      // callback(data.items);
    },
    dataType: 'json'
  });
};

window.searchYouTube = searchYouTube;


// searchYouTube({key:YOUTUBE_API_KEY, query:'cat', max: 5}, function(data){console.log(data)})
