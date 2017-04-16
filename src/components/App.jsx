class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  setCurrentVideo (option, callback) {
    this.props.searchYouTube(option, callback);
  }

  handleClick (video) {
    this.setState({'currentVideo': video});
  }

  changeHandler(query) {
    this.setCurrentVideo({key: this.props.keyID, query}, (results) => {
      this.setState({'currentVideo': results[0], videoList: results});
    });
  }

  componentDidMount(props) {
    this.setCurrentVideo({key: this.props.keyID, query: 'hacker'}, (results) => {
      this.setState({'currentVideo': results[0], videoList: results});
    });
  }

  render() {
    return (
      <div>
        <Nav changeHandler={this.changeHandler}/>
        <div className="col-md-7">
          <VideoPlayer video= {this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList handleClick={this.handleClick} videos = {this.state.videoList}/>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
