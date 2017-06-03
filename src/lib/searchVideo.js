var searchVideo = (options, callback) => {
  console.log(callback);
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {
      key: options.key,
      id: options.id,
      part: 'snippet, statistics'
    },
    success: (data) => {
      console.log(data.items[0].statistics.commentCount);
      callback(data.items);
    },
    dataType: 'json'
  });
};

window.searchVideo = searchVideo;