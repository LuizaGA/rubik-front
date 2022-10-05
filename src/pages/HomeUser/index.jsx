import { useState, useEffect } from "react"
import api from "../../services/api"
import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import Playlists from "../../components/Playlists"
import { ContainerGeral } from './styles'

function HomeUser() {

  const [playlists, setPlaylists] = useState([])

  function getPublicPlaylists(){
    let dataPlaylists = [];
    api.get('/playlist/get_all_public')
    .then((res) => {
      dataPlaylists = res.data;
      for (let i = 0; i < dataPlaylists.length; i++) {
        api.get(`/images/${dataPlaylists[i].imageId}`)
        .then((res) => {
          dataPlaylists[i].imagePath = res.data.image.image
          setPlaylists(dataPlaylists);
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

  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h2>Rubik Playlists</h2>
        <Playlists dados={playlists}/>
      </ContainerGeral>
    </div>
  )
}

export default HomeUser