import React, { Component } from "react";
import { Container, Botao, ContainerGeral } from './styles';
import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';

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
      <Container>
        <ContainerGeral>
          <Botao onClick={this.playPause}>
            <img src={this.state.isPlaying  ? Pause : Play }/>
          </Botao>
          <div>
            <p id="musica">{this.props.song.nome}</p>
            <p id="artista">{this.props.song.nomeArtista} {this.props.song.album}</p>
          </div>
        </ContainerGeral>
        <p id="tempo">{this.props.song.tempo}</p>
      </Container>
    );
  }
}

export default Music;