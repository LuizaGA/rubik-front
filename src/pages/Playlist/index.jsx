import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom"
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Container, ContainerBotao, ContainerGeral, Dados, Musicas } from './styles'
import MultiPlayer from "../../components/Multiplayer";

function Playlist(){
  const params = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [idUser, setIdUser] = useState(localStorage.getItem('id'))
  const [playlist, setPlaylist] = useState()
  const [deleteMusic, setDeleteMusic] = useState(false)


  const notifyWarn = () => toast.warn('Erro', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySucess = (text) => toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  async function getPublicPlaylists(){
    let dataPlaylist = [];
    await api.get(`/playlist/get_playlist/${params.id}`)
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

  function removeMusic(id) {
    api.put(`/playlist/removeSong`,{
      playlistId:params.id,
      songId : id
    },
    {headers: {
      "Authorization": `Bearer ${token}`
    }})
    .then((res) => {
      notifySucess('Música removida com sucesso');
      window.location.reload()
    }).catch((err) => {
      console.error(err);
      notifyWarn();
    })
  }

  function deletePlaylist() {
    api.delete(`/playlist/delete/${playlist[0]._id}`,
    {headers: {
      "Authorization": `Bearer ${token}`
    }})
    .then((res) => {
      notifySucess('Playlist deletada com sucesso');
      navigate('/home')
    }).catch((err) => {
      console.error(err);
      notifyWarn();
    })
  }

  const handleDelete = () => {
    if (window.confirm("Deseja realmente excluir?")) {
      deletePlaylist()
    }
  };

  useEffect(()=>{ getPublicPlaylists() }, [])

  return(
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {!!playlist ?
        <Container >
          { idUser == playlist[0].createdBy ?        
            <ContainerBotao>
              <div style={{ border: '2px #D45151 solid'}} onClick={() => setDeleteMusic(!deleteMusic)}>
                <img src="/assets/icons/trash.svg" alt=""/>
                <p style={{color: '#D45151'}}>Remover músicas da playlist</p>
              </div>
              <div style={{ border: '2px #D45151 solid'}} onClick={() => handleDelete()}>
                <img src="/assets/icons/trash.svg" alt=""/>
                <p style={{color: '#D45151'}}>Apagar playlist</p>
              </div>
            </ContainerBotao>
          : null}
          {deleteMusic ? 
            <div id="delete">
              <img src="/assets/icons/X.png" style={{cursor:'pointer'}} onClick={() => setDeleteMusic(false)}/>
              {playlist[0].songs.map( music =>{
                return(
                  <div onClick={() => removeMusic(music._id)}>
                    <img src="/assets/icons/trash.svg"/>
                    <p>{music.title}</p>
                  </div>
                )
              })}
            </div>
          : null}
          { playlist[0].isPublic ?        
            <ContainerGeral>
              <Dados>
                <img alt="capa" src={`data:image/png;base64,${playlist[0].imagePath}`}/>
                <h2>{playlist[0].name}</h2>
                <p>{playlist[0].description}</p>
              </Dados>
              <Musicas>
                <MultiPlayer urls={playlist[0].songs}/>
              </Musicas>
            </ContainerGeral>
          : idUser == playlist[0].createdBy ?
            <ContainerGeral>
              <Dados>
                <img alt="capa" src={`data:image/png;base64,${playlist[0].imagePath}`}/>
                <h2>{playlist[0].name}</h2>
                <p>{playlist[0].description}</p>
              </Dados>
              <Musicas>
                <MultiPlayer urls={playlist[0].songs}/>
              </Musicas>
            </ContainerGeral>
          :  
            <ContainerGeral>
              <h4>Essa playlist é privada</h4>
            </ContainerGeral> 
          }
          <ToastContainer />
        </Container>
      : null }
    </div>
  )
}

export default Playlist