import React, { Component } from 'react';


class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/{props.id}/giphy.webp";
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif
