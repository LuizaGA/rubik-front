import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom"
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Container, ContainerBotao, ContainerGeral, Dados, Musicas, PaginaModal } from './styles'
import MultiPlayer from "../../components/Multiplayer";

function Playlist() {
  const params = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [idUser, setIdUser] = useState(localStorage.getItem('id'))
  const [playlist, setPlaylist] = useState()
  const [deleteMusic, setDeleteMusic] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isPublic, setIsPublic] = useState()

  const notifyWarn = (text) => toast.warn(text, {
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

  async function getPublicPlaylists() {
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

  async function getImagePlaylist(playlist) {
    let data = playlist
    await api.get(`/images/${data[0].imageId}`)
      .then((res) => {
        data[0].imagePath = res.data.image.image;
      }).catch((err) => {
        console.error(err);
      })
    if (data[0].imagePath) {
      setPlaylist(data)
      setName(data[0].name)
      setDescription(data[0].description)
      setIsPublic(data[0].isPublic)
    }
  }

  function removeMusic(id) {
    api.put(`/playlist/removeSong`, {
      playlistId: params.id,
      songId: id
    },
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        notifySucess('Música removida com sucesso');
        const myTimeout = setTimeout(reload, 4500)
      }).catch((err) => {
        console.error(err);
        notifyWarn('Erro');
      })
  }

  function reload() {
    window.location.reload()
  }

  function deletePlaylist() {
    api.delete(`/playlist/delete/${playlist[0]._id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        notifySucess('Playlist deletada com sucesso');
        navigate('/home')
      }).catch((err) => {
        console.error(err);
        notifyWarn('Erro');
      })
  }

  const handleDelete = () => {
    if (window.confirm("Deseja realmente excluir?")) {
      deletePlaylist()
    }
  };

  function haldleEdit(e) {
    e.preventDefault();
    console.log(name)
    console.log(description)
    console.log(isPublic)
    api.put(`/playlist/update/${playlist[0]._id}`, {
      name: name,
      description: description,
      isPublic: isPublic
    },
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((res) => {
        notifySucess('Playlist editada com sucesso');
        setShowModal(false)
        const myTimeout = setTimeout(reload, 4500)
      }).catch((err) => {
        console.error(err);
        notifyWarn('Erro');
      })

  }

  useEffect(() => { getPublicPlaylists() }, [])

  return (
    <div style={{ height: '100vh', backgroundColor: "#000000" }}>
      <TopBar />
      <SideBar />
      {!!playlist ?
        <Container >
          {idUser == playlist[0].createdBy ?
            <ContainerBotao>
              <div style={{ border: '2px white solid' }} onClick={() => setShowModal(!showModal)}>
                <img src="/assets/icons/edit.svg" alt="" />
                <p> Editar playlist</p>
              </div>
              <div style={{ border: '2px #D45151 solid' }} onClick={() => setDeleteMusic(!deleteMusic)}>
                <img src="/assets/icons/trash.svg" alt="" />
                <p style={{ color: '#D45151' }}>Remover músicas</p>
              </div>
              <div style={{ border: '2px #D45151 solid' }} onClick={() => handleDelete()}>
                <img src="/assets/icons/trash.svg" alt="" />
                <p style={{ color: '#D45151' }}>Apagar playlist</p>
              </div>
            </ContainerBotao>
            : null}
          {deleteMusic ?
            <div id="delete">
              <img src="/assets/icons/X.png" style={{ cursor: 'pointer', alignSelf: 'flex-end' }} onClick={() => setDeleteMusic(false)} />
              {playlist[0].songs.map(music => {
                return (
                  <div onClick={() => removeMusic(music._id)}>
                    <img src="/assets/icons/trash.svg" />
                    <p>{music.title} - {music.artist}</p>
                  </div>
                )
              })}
            </div>
            : null}
          {playlist[0].isPublic ?
            <ContainerGeral>
              <Dados>
                <img alt="capa" src={`data:image/png;base64,${playlist[0].imagePath}`} />
                <h2>{playlist[0].name}</h2>
                <p>{playlist[0].description}</p>
              </Dados>
              <Musicas>
                <MultiPlayer urls={playlist[0].songs} />
              </Musicas>
            </ContainerGeral>
            : idUser == playlist[0].createdBy ?
              <ContainerGeral>
                <Dados>
                  <img alt="capa" src={`data:image/png;base64,${playlist[0].imagePath}`} />
                  <h2>{playlist[0].name}</h2>
                  <p>{playlist[0].description}</p>
                </Dados>
                <Musicas>
                  <MultiPlayer urls={playlist[0].songs} />
                </Musicas>
              </ContainerGeral>
              :
              <ContainerGeral>
                <h4>Essa playlist é privada</h4>
              </ContainerGeral>
          }
          <ToastContainer />
        </Container>
        : null}
      {showModal ?
        <PaginaModal>
          <div>
            <div className="title-modal">
              <label>Editar playlist</label>
              <img src="/assets/icons/X.png" alt="fechar" onClick={() => setShowModal(false)} />
            </div>
            <form onSubmit={haldleEdit} ref={formRef}>
              <label htmlFor="name">Nome:</label>
              <input id='name' type="text" placeholder="Insira o nome da playlist" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="description">Descrição:</label>
              <textarea id="description" type="text" placeholder="Insira a descrição da playlist" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
              <div id="public">
                <label>Trocar visibilidade:</label>
                <div onClick={() => setIsPublic(!isPublic)}>
                  <label >{isPublic ? 'Tornar privada' : 'Tornar pública'}</label>
                </div>
              </div>
              <div>
                <input type="submit" value="Editar" id="botao" />
              </div>
            </form>
          </div>
        </PaginaModal>
        : null}
    </div>
  )
}

export default Playlist