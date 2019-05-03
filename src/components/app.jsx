import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx"

const GIPHY_API_KEY = 'nOG7tdXIvI3V33fIRwJhZQlp8OYX7wRh';

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "3og0IGFLUEUWKUCO0E"
    }

    this.search("a");
   }

   search = (query) => {
    // Todo : API Call
    giphy(GIPHY_API_KEY)
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        })
    })
   }

   selectGif = (id) => {
    this.setState({
      selectedGifID: id
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
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
    );
  }
};

export default App;
