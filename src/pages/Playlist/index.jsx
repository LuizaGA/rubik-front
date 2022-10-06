import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom"
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { ContainerGeral, Dados, Musicas } from './styles'
import MultiPlayer from "../../components/Multiplayer";

function Playlist(){
  const params = useParams();
  const [playlist, setPlaylist] = useState()

  async function getPublicPlaylists(){
    let dataPlaylist = [];
    await api.get(`/playlist/get_one_public/${params.id}`)
    .then((res) => {
      dataPlaylist = res.data;
    })
    .catch((err) => {
      console.error(err);
    })
    if (dataPlaylist.length > 0) {
      getImagePlaylist(dataPlaylist)
    }
  }

  async function getImagePlaylist(playlist){
    let data = playlist
    await api.get(`/images/${data[0].imageId}`)
      .then((res) => {
        data[0].imagePath = res.data.image.image;
      }).catch((err) => {
        console.error(err);
      })
    if (data[0].imagePath){
      setPlaylist(data)
    }
  }

  useEffect(()=>{ getPublicPlaylists() }, [])

  return(
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {!!playlist ?
        <ContainerGeral >
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