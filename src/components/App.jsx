class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }
  
  render() {
    // console.log(this.state.currentVideo);
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer videos={window.exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList/>
      </div>
    </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App({videos: window.exampleVideoData});
