var searchVideo = (options, callback) => {

  var url = 'https://www.googleapis.com/youtube/v3/videos?' + $.param({
    key: options.key,
    id: options.id,
    part: 'snippet, statistics',
    dataType: 'json'
  });

  var myHeader = new Headers();

  var myInit = {
    method: 'GET',
    headers: myHeader,
    mode: 'cors',
    cache: 'default'
  };

  fetch(url, myInit).then(response => {
    return response.json().then(function(json) {
      callback(json.items); 
    // var response = new Response(data.blob());
    // console.log('response', response)
    // console.log(data)
    });
  }).catch(data => {
    console.log(data);
  });
};

// var searchVideo = (options, callback) => {
//   console.log(callback);
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/videos',
//     data: {
//       key: options.key,
//       id: options.id,
//       part: 'snippet, statistics'
//     },
//     success: (data) => {
//       console.log(data.items[0].statistics.commentCount);
//       callback(data.items);
//     },
//     dataType: 'json'
//   });
// };

// window.searchVideo = searchVideo;






// var myHeaders = new Headers();

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// var myRequest = new Request('flowers.jpg', myInit);

// fetch(myRequest).then(function(response) {
//   return response.blob();
// }).then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });