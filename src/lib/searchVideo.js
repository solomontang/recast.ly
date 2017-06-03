var searchVideo = (options, callback) => {
  console.log(callback);
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {
      key: options.key,
      id: options.id,
      part: 'snippet,statistics'
    },
    success: (data) => {
      console.log('video', data);
      callback(data.items);
    },
    dataType: 'json'
  });
};

window.searchVideo = searchVideo;