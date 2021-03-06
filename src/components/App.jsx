class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      currentVideo: {snippet: {title: '', description: '', thumbnails:{default: {url:''}}}, id: {videoID: ''}, statistics: {commentCount: '0', viewCount: '0'}},
      videos: [{snippet: {title: '', description: '', thumbnails:{default: {url:''}}}}],
      autoplay: 0
    };
  }
  

  componentDidMount() {
    this.callSearch('react.js', this.setTheState.bind(this));
  }

  handleNavSearch(input) {
    this.callSearch(input, this.setTheState.bind(this));
  }
  
  handleClick(video, e) {
    this.setState({currentVideo: video});
  }
  
  handleAutoplay() {
    this.setState({
      autoplay: this.state.autoplay === 0 ? 1 : 0
    });

    console.log(this.state.autoplay);
  }

  callSearch(query, callback) {
    this.props.search({
      key: YOUTUBE_API_KEY, 
      query: query,
      max: 5},
      callback
    );
  } 

  setTheState(data) {
    this.setState({
      currentVideo: data[0],
      videos: data,
    });
  }
  
  render() {
    return (<div>
      <Nav search={this.handleNavSearch.bind(this)} />

      <div className="col-md-8">
        <VideoPlayer video={this.state.currentVideo} autoplay = {this.state.autoplay} />
      </div>

      <div className="col-md-8">
        <Autoplay handleClick={this.handleAutoplay.bind(this)} />
      </div>

  

      <div className="col-md-8">
        <VideoDetails video={this.state.currentVideo} />
      </div>
      <div className="col-md-8">
        <VideoList videos={this.state.videos} handleClick = {this.handleClick.bind(this)} />
      </div>
    </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
