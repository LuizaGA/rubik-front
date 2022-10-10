import { useState, useEffect } from "react"
import api from "../../services/api"
import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import Playlists from "../../components/Playlists"
import { ContainerGeral } from './styles'

function Library() {

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userId, setUserId] = useState(localStorage.getItem('id'))

  const [playlists, setPlaylists] = useState([])

  function getPublicPlaylists(){
    let dataPlaylists = [];
    api.get(`/playlist/get_all_private/${userId}`, {headers: {
      "Authorization": `Bearer ${token}`
    }})
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
      {token ? 
        <ContainerGeral>
          <h2>Minha Biblioteca</h2>
          <Playlists dados={playlists}/>
        </ContainerGeral>
      : 
        <ContainerGeral>
          <h4>Você tem que ter feito o login para ter acesso a esse recurso</h4>
        </ContainerGeral>
      }
    </div>
  )
}

export default Library