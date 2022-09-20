import React, { Component } from "react";

class Music extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(this.props.song.caminho),
    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }
    // Change the state of song
      this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        <p>
          {this.props.song.nome}       
        </p>
        <p>{this.props.song.nomeArtista} {this.props.song.album}</p>
        {/* <p>{this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}</p> */}
        <button onClick={this.playPause}>
          Play | Pause
        </button>
      </div>
    );
  }
}

export default Music;