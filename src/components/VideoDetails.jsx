var VideoDetails = (props) => {
  return (
  <div className="videoDetails row" > 
    {console.log(props.video)}
    <div className="videoDetails-left video-player-details col-md-6" >
      <h5>Duration:</h5>
      <h5>CommentCount:</h5>
    </div>

    <div className="videoDetails-left video-player-details col-md-6">
      <h5>Views:</h5>
      <h5>Likes/Dislikes:</h5>
    </div>
    

  </div>);

  //Duration                    Views
  //Comment Count               Likes/Dislikes
};

window.VideoDetails = VideoDetails;