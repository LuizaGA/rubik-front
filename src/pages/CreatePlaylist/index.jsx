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

  const handlePublic = (e) => {
    setIsPublic(e.target.value);
  }

  function handleCreatePlaylist(e){
    console.log(image)
    let publicPlaylist;
    e.preventDefault();
    if (isPublic === 'true'){
      publicPlaylist = true
    } else {
      publicPlaylist = false
    }
    console.log(publicPlaylist)
    api.post('/playlist/create', {
      name: name,
      description: description,
      createdBy: idUser,
      image: image,
      isPublic: publicPlaylist
    }, {headers: {
      "Authorization": `Bearer ${token}`
    }}).then((res) => {
      console.log('criada')
    }).catch((err) => {
      console.error(err)
    })


    // api.post(`/user/update/${idUser}`, {
    //   name: name,
    //   email: email,
    //   birthday: birthday,
    //   gender: genero,
    // }, {headers: {
    //   "Authorization": `Bearer ${token}`
    // }}).then((res) => {
    //   localStorage.setItem('name', res.data.name)
    //   localStorage.setItem('email', res.data.email)
    //   localStorage.setItem('birthday', res.data.birthday)
    //   localStorage.setItem('gender', res.data.gender)
    //   notifySucess();
    // }).catch((err) => {
    //   notifyWarn();
    //   console.error(err)
    // })
  }

  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {idUser ?     
      <ContainerGeral>
        <h2>Criar playlist</h2>
        <form onSubmit={handleCreatePlaylist} ref={formRef}>
          <Label htmlFor="name">Nome:</Label>
          <Input id='name' type="text" placeholder="Insira o nome da playlist" value={name} onChange={(e) => setName(e.target.value)} required/>
          <Label htmlFor="description">Descrição:</Label>
          <InputText id="description" type="text" placeholder="Insira a descrição da playlist" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Label>Imagem:</Label>
          <InputImage>
            <label htmlFor="image">Escolher arquivo</label>
            <input id="image" type="file" value={''} onChange={(e) => setImage(e.target.files[0])} />
          </InputImage>
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
            <InputSubmit type="submit" value="Inscrever-se"/>
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