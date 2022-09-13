import { ContainerGeral, ContainerLogo,Logo, NomeSite, Label, Input,  TextoObs, Span, InputSubmit } from './styles'
import LinkWrapper from '../../components/LinkWrapper'
import { useRef, useState } from 'react';


function Login() {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <ContainerGeral>
      <ContainerLogo>
      <LinkWrapper to="/">
      <Logo src="logo_black.png" alt="logo" />
      </LinkWrapper>
      <NomeSite>Rubik</NomeSite>
      </ContainerLogo>
      <form onSubmit={handleLogin} ref={formRef}>
        <Label htmlFor="email">Endereço de e-mail</Label>
        <Input id="email" type="email" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <Label htmlFor="password">Senha</Label>
        <Input id='password' type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <InputSubmit type="submit" value="Entrar"/>
      </form>
      <TextoObs style={{fontSize:'1rem'}}>Não possui conta? <LinkWrapper to="/registration"><Span>Registre-se.</Span></LinkWrapper></TextoObs>
    </ContainerGeral>
  )
}

export default Login