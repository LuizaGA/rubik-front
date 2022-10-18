import { useRef, useState } from 'react';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import { ContainerGeral, Label, Input, AreaSubmit, InputSubmit, Legenda, ContainerGenero, LabelMenor, InputText , InputImage} from './styles'

function CreatePlaylist() {
  const formRef = useRef(null);
  const [idUser, setIdUser] = useState(localStorage.getItem('id'))
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [isPublic, setIsPublic] = useState('true')

  const handlePublic = async (e) => {
    setIsPublic(e.target.value);
  }

  const notifyWarn = () => toast.warn('Por favor, escolha uma imagem', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySucess = () => toast.success('Playlist criada com sucesso. Você pode visualizá-la na sua Biblioteca', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = () => toast.error('Não foi possível criar a playlist, verifique se a imagem está no formato e tamanho corretos', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  function handleCreatePlaylist(e){
    let publicPlaylist;
    e.preventDefault();
    if (isPublic === 'true'){
      publicPlaylist = true
    } else {
      publicPlaylist = false
    }
    if (!image){
      notifyWarn();
    } else {
      api.post('/playlist/create', {
        name: name,
        description: description,
        createdBy: idUser,
        image: image,
        isPublic: publicPlaylist
      }, {headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }}).then((res) => {
        notifySucess();
        setName("")
        setDescription("")
        setImage()
        setIsPublic('true')
      }).catch((err) => {
        console.error(err)
        notifyError();
        setImage(null)
      })
    }
  }


  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {token ?     
      <ContainerGeral>
        <h2>Criar playlist</h2>
        <form onSubmit={handleCreatePlaylist} ref={formRef}>
          <Label htmlFor="name">Nome:</Label>
          <Input id='name' type="text" placeholder="Insira o nome da playlist" value={name} onChange={(e) => setName(e.target.value)} required/>
          <Label htmlFor="description">Descrição:</Label>
          <InputText id="description" type="text" placeholder="Insira a descrição da playlist" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Label >Imagem da capa:</Label>
          <InputImage>
            <label htmlFor="image">{ image ? image.name :'Escolher arquivo'}</label>
            <input id="image" type="file" value={''} onChange={(e) => setImage(e.target.files[0])} />
          </InputImage>
          <h6>
            O formato da imagem deve ser png, jpeg ou jpg e o tamanho deve ser menor que 12MB
          </h6>
          <Legenda>Essa playlist é pública? </Legenda>
          <ContainerGenero>
            <LabelMenor>
              <input type="radio" value="true" name="public" checked={isPublic === 'true'} onChange={handlePublic} /> Sim
            </LabelMenor>
            <LabelMenor>
              <input type="radio" value="false" name="public" checked={isPublic === 'false'} onChange={handlePublic} /> Não
            </LabelMenor>
          </ContainerGenero>
          <AreaSubmit>
            <InputSubmit type="submit" value="Criar"/>
          </AreaSubmit>  
          <ToastContainer />
        </form>
      </ContainerGeral>
      : 
      <ContainerGeral>
          <h4>Você tem que ter feito o login para ter acesso a esse recurso</h4>
      </ContainerGeral>
      }
    </div>
  )
}

export default CreatePlaylist