import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx"


class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "3og0IGFLUEUWKUCO0E"
    }

    this.search("homer thinking");
   }

   search = (query) => {
    // Todo : API Call
    giphy('ieOllzYb0kfuu2PYwgcN9Yn6mgo0vVMx').search({
      q: query,
      rating: 'g',
      limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
      })
    })
   }

  render() {
    return (
        <div>
          <div className="left-scene">
            <SearchBar searchFunction={this.search}/>
            <div className="selected-gif">
              <Gif id={this.state.selectedGifID} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
    );
  }
};

export default App;