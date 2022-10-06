import { useRef, useState } from 'react';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import { ContainerGeral, Label, Input, AreaSubmit, InputSubmit, Legenda, ContainerGenero, LabelMenor } from './styles'

function Perfil() {
  const formRef = useRef(null);
  const [idUser, setIdUser] = useState(localStorage.getItem('id'))
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [name, setName] = useState(localStorage.getItem('name'))
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday'))
  const [genero, setGenero] = useState(localStorage.getItem('gender'))

  let editAniversario = birthday[8] + birthday[9] +"/"+ birthday[5]+ birthday[6] + "/" + birthday[0]+ birthday[1] + birthday[2]+ birthday[3];

  const handleGenero = (e) => {
    setGenero(e.target.value);
  }

  function handleEdit(e){
    e.preventDefault();
    api.post(`/user/update/${idUser}`, {
      name: name,
      email: email,
      birthday: birthday,
      gender: genero,
    }, {headers: {
      "Authorization": `Bearer ${token}`
    }}).then((res) => {
      localStorage.setItem('name', res.data.name)
      localStorage.setItem('email', res.data.email)
      localStorage.setItem('birthday', res.data.birthday)
      localStorage.setItem('gender', res.data.gender)
      notifySucess();
    }).catch((err) => {
      notifyWarn();
      console.error(err)
    })
  }

  const notifyWarn = () => toast.warn('Perfil não editado', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySucess = () => toast.success('Perfil editado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h2>Editar perfil</h2>
        <form onSubmit={handleEdit} ref={formRef}>
          <Label htmlFor="name">Nome:</Label>
          <Input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Legenda>Data de nascimento: {editAniversario}</Legenda>
          <Label htmlFor="date">Alterar data de nascimento:</Label>
          <Input id="date" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          <Legenda>Gênero:</Legenda>
          <ContainerGenero>
            <LabelMenor>
              <input type="radio" value="masculino" name="gender" checked={genero === 'masculino'} onChange={handleGenero} /> Masculino
            </LabelMenor>
            <LabelMenor>
              <input type="radio" value="feminino" name="gender" checked={genero === 'feminino'} onChange={handleGenero} /> Feminino
            </LabelMenor>
            <LabelMenor>
              <input type="radio" value="naoBinario" name="gender" checked={genero === 'naoBinario'} onChange={handleGenero} /> Não binário
            </LabelMenor>
          </ContainerGenero>
          <AreaSubmit>
            <InputSubmit type="submit" value="Editar"/>
          </AreaSubmit>  
          <ToastContainer />
        </form>
      </ContainerGeral>
    </div>
  )
}

export default Perfil