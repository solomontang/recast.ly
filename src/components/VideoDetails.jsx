var VideoDetails = (props) => {
  return (
  <div className="videoDetails row" > 
    {console.log(props)}
    <div className="videoDetails-left video-player-details col-md-6" >
      <h5>Favorites: {props.video.statistics.favoriteCount}</h5>
      <h5>CommentCount: {props.video.statistics.commentCount}</h5>

    </div>

    <div className="videoDetails-left video-player-details col-md-6">
      <h5>Views: {props.video.statistics.viewCount}</h5>
      <h5>Likes/Dislikes: {props.video.statistics.likeCount} / {props.video.statistics.dislikeCount}</h5>
    </div>
    

  </div>);

  //Duration                    Views
  //Comment Count               Likes/Dislikes
};

window.VideoDetails = VideoDetails;