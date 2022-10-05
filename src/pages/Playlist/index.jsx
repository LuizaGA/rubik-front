import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom"
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { ContainerGeral, Dados, Musicas } from './styles'
import MultiPlayer from "../../components/Multiplayer";

function Playlist(){
  const params = useParams();
  const [playlist, setPlaylist] = useState([])

  function getPublicPlaylists(){
    let dataPlaylist = [];
    api.get(`/playlist/get_one_public/${params.id}`)
    .then((res) => {
      dataPlaylist = res.data;
      console.log(dataPlaylist[0].imagePath)
      dataPlaylist[0].imagePath;  
      api.get(`/images/${dataPlaylist[0].imageId}`).then((res) => {
        dataPlaylist[0].imagePath = res.data.image.image;
      })
      for (let i = 0; i < dataPlaylist[0].songs.length; i++) {
        api.get(`/images/${dataPlaylist[0].songs[i].imageId}`)
        .then((res) => {
          dataPlaylist[0].songs[i].imagePath = res.data.image.image
          setPlaylist(dataPlaylist);
        }).catch((err) => {
          console.error(err)
        })
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  useEffect(()=>{ getPublicPlaylists() }, [])

  return(
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {playlist.length > 0 ?
        <ContainerGeral>
          <Dados>
            <img alt="capa" src={`data:image/png;charset=utf-8;base64,${playlist[0].imagePath}`}/>
            <h2>{playlist[0].name}</h2>
          </Dados>
          <Musicas>
            <MultiPlayer urls={playlist[0].songs}/>
          </Musicas>
        </ContainerGeral>
      : null }
    </div>
  )
}

export default Playlist