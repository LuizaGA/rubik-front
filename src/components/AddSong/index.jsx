import { useState, useEffect } from 'react'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerGeral } from './styles'

function AddSong({music}){
  const [idUser, setIdUser] = useState(localStorage.getItem('id'))
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [ playlist, setPlaylist ] = useState([])

  const notifyWarn = () => toast.warn('Erro', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySucess = (name) => toast.success(`Múcia adicionada com sucesso na playlist ${name}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  function getPlaylists(){
    api.get(`/playlist/get_all_private/${idUser}`,
    {headers: {
      "Authorization": `Bearer ${token}`
    }}).then ((res) => {
      setPlaylist(res.data)
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    getPlaylists()
  }, [])

  function addSong(id, name){
    api.put('playlist/addSong', {
      playlistId: id,
      songId: music.id,
    }, {headers: {
      "Authorization": `Bearer ${token}`
    }}).then((res) => {
      notifySucess(name)
    }).catch((err) => {
      console.error(err)
      notifyWarn()
    })
  }

  return(
    <div>
      { idUser ?    
        <ContainerGeral>
          <p>Adicionar "{music.nomeMusica} - {music.nomeArtista}" em:</p>
            {playlist.length > 0 ? playlist.map(item => {
              return(
                <div onClick={() => addSong( item._id, item.name )} key={item._id}>
                  <p> + {item.name}</p>
                </div>
              )
            }) 
            :
            <span style={{color: 'red', fontSize:'0.7rem', marginLeft:'2rem'}}>Primeiro crie uma playlist e depois adicione as músicas</span>
            }
        </ContainerGeral>
      : 
      <span style={{color: 'red', fontSize:'0.8rem', marginLeft:'2rem'}}>Você tem que ter feito login para ter acesso a esse recurso</span>
      }
      <ToastContainer />
    </div>
  )
}

export default AddSong