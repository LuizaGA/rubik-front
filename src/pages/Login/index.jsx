import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkWrapper from '../../components/LinkWrapper'
import { ContainerGeral, ContainerLogo, Logo, NomeSite, Label, Input,  TextoObs, Span, InputSubmit } from './styles'


function Login() {
  const formRef = useRef(null);
  const [emailLogin, setEmailLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const notifyWarn = (text) => toast.warn('Email e ou senha incorretos', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  function handleLogin(e){
    e.preventDefault();
    api.post(`/auth/login`, {
      email: emailLogin,
      password: password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.user._id)
      localStorage.setItem('name', res.data.user.name)
      localStorage.setItem('email', res.data.user.email)
      localStorage.setItem('birthday', res.data.user.birthday)
      localStorage.setItem('gender', res.data.user.gender)
      navigate("/home")
    }).catch((err) => {
      console.error(err)
      notifyWarn()
    })
  }

  return (
    <ContainerGeral>
      <ContainerLogo>
      <LinkWrapper to="/">
      <Logo src="/assets/logo/logo_black.png" alt="logo" />
      </LinkWrapper>
      <NomeSite>Rubik</NomeSite>
      </ContainerLogo>
      <form onSubmit={handleLogin} ref={formRef}>
        <Label htmlFor="email">Endereço de e-mail</Label>
        <Input id="email" type="email" placeholder="Endereço de e-mail" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} required/>
        <Label htmlFor="password">Senha</Label>
        <Input id='password' type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <InputSubmit type="submit" value="Entrar"/>
      </form>
      <TextoObs style={{fontSize:'1rem'}}>Não possui conta? <LinkWrapper to="/registration"><Span>Registre-se.</Span></LinkWrapper></TextoObs>
      <ToastContainer />
    </ContainerGeral>
  )
}

export default Login