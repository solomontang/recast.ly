class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.videos);
    this.state = {
      currentVideo: this.props.videos[0],
      videos: this.props.videos
    };
  }
  
  render() {
    // console.log(this.state.currentVideo);
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer videos={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos}/>
      </div>
    </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App();
