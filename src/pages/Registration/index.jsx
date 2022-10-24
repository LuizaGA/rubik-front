import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import LinkWrapper from '../../components/LinkWrapper'
import { ContainerGeral, ContainerLogo,Logo,  NomeSite, Texto, Label, Input, Legenda, LabelMenor, ContainerGenero, TextoObs, Span, InputSubmit } from './styles'

function Registration() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [confEmail, setConfEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [genero, setGenero] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [compartilhar, setCompartilhar] = useState(false);
  const [termos, setTermos] = useState(false);
  
  const handleGenero = (e) => {
    setGenero(e.target.value);
  }

  const handleMarketing = (e) => {
    setMarketing(!marketing);
  }
  
  const handleCompartilhar = (e) => {
    setCompartilhar(!compartilhar);
  }
  
  const handleTermos= (e) => {
    setTermos(!termos);
  }

  const notifyWarn = (text) => toast.warn(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySucess = () => toast.success('Cadastro realizado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  function handleRegistration(e){
    e.preventDefault();
    if (!termos) {
      notifyWarn('Por favor, aceite os termos de uso');
    } else if (email != confEmail) {
      notifyWarn('Por favor, coloque o mesmo email nos dois campos');
    } else if( !genero) {
      notifyWarn('Por favor, preencha todos os campos do formulário');
    } else if (password.length < 8) {
      notifyWarn('A senha tem que ter no mínimo 8 caracteres');
    } else {
      api.post('/user/register', {
        name: name,
        email: email,
        password: password,
        birthday: birthday,
        gender: genero,
      })
      .then((res) => {
        notifySucess();
        setEmail('');
        setConfEmail('');
        setName('');
        setPassword('');
        setBirthday('');
        setGenero('');
        setMarketing(false);
        setCompartilhar(false);
        setTermos(false);
        formRef.current.reset();
        const myTimeout = setTimeout(goLogin, 3000)
      })
      .catch((err) =>{
        notifyWarn('Cadastro não realizado');
        console.error(err);
        formRef.current.reset();
      })
    }
  }



function goLogin() {
  navigate('/login')
}



  return (
    <ContainerGeral>
      <ContainerLogo>
      <LinkWrapper to="/">
      <Logo src="/assets/logo/logo_black.png" alt="logo" />
      </LinkWrapper>
      <NomeSite onClick={() => navigate('/')}>Rubik</NomeSite>
      </ContainerLogo>
      <Texto>Inscreva-se grátis e comece a curtir.</Texto>
      <form onSubmit={handleRegistration} ref={formRef}>
        <Label htmlFor="email">Qual o seu email?</Label>
        <Input id="email" type="email" placeholder="Insira seu email." value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <Label htmlFor="confirm">Confirme seu email</Label>
        <Input id="confirm" type="email" placeholder="Insira seu email novamente." value={confEmail} onChange={(e) => setConfEmail(e.target.value)} required/>
        <Label htmlFor="password">Crie uma senha</Label>
        <Input id='password' type="password" placeholder="Crie uma senha." value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <Label htmlFor="name">Como devemos chamar você?</Label>
        <Input id='name' type="text" placeholder="Insira um nome de perfil." value={name} onChange={(e) => setName(e.target.value)} required/>
        <Label htmlFor="date">Qual a sua data de nascimento?</Label>
        <Input id="date" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required/>
        <Legenda>Qual é o seu gênero?</Legenda>  
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
          <LabelMenor style={{display: 'block', marginTop:'1.5rem'}}>
            <input type="checkbox" value="marketing" checked={marketing} onChange={handleMarketing}/>  Não quero receber mensagens de marketing do Rubik
          </LabelMenor>
          <LabelMenor style={{display: 'block', marginTop:'1.5rem'}}>
            <input type="checkbox" value="compartilhar" checked={compartilhar} onChange={handleCompartilhar}/>  Compartilhar meus dados cadastrais com os provedores de conteúdo do Rubik para fins de marketing.
          </LabelMenor>
          <LabelMenor style={{display: 'block', marginTop:'1.5rem'}}>
            <input type="checkbox" value="termos" checked={termos} onChange={handleTermos}/>  Eu concordo com os Termos e Condições de Uso do Rubik.
          </LabelMenor>
          <TextoObs>Para saber mais sobre como o Rubik coleta, utiliza, compartilha e protege seus dados pessoais, leia a Política de Privacidade do Rubik.</TextoObs>
        <InputSubmit type="submit" value="Inscrever-se"/>
        <ToastContainer />
      </form>
      <TextoObs style={{fontSize:'1rem'}}>Já tem uma conta? <LinkWrapper to="/login"><Span>Faça login.</Span></LinkWrapper></TextoObs>
    </ContainerGeral>
  )
}

export default Registration