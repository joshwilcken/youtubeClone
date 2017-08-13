import _ from "lodash";
import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import Header from "../src/components/Header/Header";
import VideoList from "../src/components/VideoList/VideoList";
import VideoDetail from "../src/components/VideoDetail/VideoDetail";
const API_KEY = "AIzaSyDHCx_Gv-My74fKxrsUnFKSsikDj9UV-3Q";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Eric Clapton");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <Header onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;








