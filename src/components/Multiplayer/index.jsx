import React, { useState, useEffect } from 'react'
import { Container, Botao, ContainerGeral } from './styles';
import AddSong from '../AddSong'
import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';


const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url: url.playPath,
        audio: new Audio(url.playPath),
      }
    }),
  )
  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        id: url._id,
        addMusic: false,
        url: url.playPath,
        album: url.album, 
        nomeMusica: url.title,
        nomeArtista: url.artist,
        tempo: url.duration,
        imagem: url.imagePath,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const MultiPlayer = ({ urls, info }) => {
  const [ modal, setModal] = useState(false)
  const [players, toggle] = useMultiAudio(urls)
  return (  
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} modalState={modal} modalSet={setModal}/>
        ))}
    </div>
  )
}

function teste( player,  modalState, modalSet) {
  modalSet(!modalState)
  player.addMusic = !player.addMusic
  // console.log(modal)
}

const Player = ({ player, toggle, modalState, modalSet}) => (
  <div>
    <Container>
      <ContainerGeral id={ player.playing ? "tocando": ""}>
        <Botao onClick={toggle}>
          <img src={player.playing  ? Pause : Play }/>
        </Botao>
        <div>
          <p id="musica">{player.nomeMusica}</p>
          <p id="artista" >{player.nomeArtista}&nbsp; &nbsp;- &nbsp; &nbsp;{player.album}</p>
        </div>
      </ContainerGeral>
      <div id="container">
        <p id="tempo" >{player.tempo}</p>
        <img src="/assets/icons/more-options.svg" onClick={() => teste(player,  modalState, modalSet)}/>
      </div>
    </Container>
    {player.addMusic ? 
      <AddSong music={player} />
    : null}
  </div>
)

export default MultiPlayer