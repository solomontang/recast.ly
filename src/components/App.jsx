class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {snippet: {title: '', description: '', thumbnails:{default: {url:''}}}, id: {videoID: ''}},
      videos: [{snippet: {title: '', description: '', thumbnails:{default: {url:''}}}}]
      // currentVideo: [this.props.videos[0]],
      // videos: this.props.videos
    };
  }


  componentDidMount() {

    //prepare function outside to bind properly
    var setTheState = function(data) {
      this.setState({
        currentVideo: data[0],
        videos: data
      });

    };

    //fetch initital cat data
    this.props.search({
      key: YOUTUBE_API_KEY, 
      query: 'cat',
      max: 5},

      setTheState.bind(this)

    );
  }

  //handleClick
  handleClick(video, e) {
    this.setState({currentVideo: video});
  }

  handleNavSearch(input) {
    console.log(input);
    var setTheState = function(data) {
      this.setState({
        currentVideo: data[0],
        videos: data
      });

    };  

    this.props.search({
      key: YOUTUBE_API_KEY,
      query: input,
      max: 5
    },
      setTheState.bind(this)
    );

  }
  
  render() {
    // console.log(this.state.currentVideo);
    return (<div>
      <Nav search={this.handleNavSearch.bind(this)} />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} handleClick = {this.handleClick.bind(this)} />
      </div>
    </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
