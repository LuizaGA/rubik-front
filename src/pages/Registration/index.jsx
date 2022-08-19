import { useRef, useState } from 'react';
import LinkWrapper from '../../components/LinkWrapper'
import {ContainerGeral, ContainerLogo, NomeSite, Texto, Label, Input} from './styles'

function Registration() {
  const formRef = useRef(null);
  const [genero, setGenero] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [compartilhar, setCompartilhar] = useState(false);
  const [termos, setTermos] = useState(false);

  function handleRegistration(e){
    e.preventDefault();

    console.log('cadastrado');
    console.log(genero);
    formRef.current.reset();
  }

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

  return (
    <ContainerGeral>
      <ContainerLogo>
      <img src="logo_black.png" alt="logo" />
      <NomeSite>Rubik</NomeSite>
      </ContainerLogo>
      <Texto>Inscreva-se grátis e comece a curtir.</Texto>
      <form onSubmit={handleRegistration} ref={formRef}>
        <Label htmlFor="email">Qual o seu email?</Label>
        <Input id="email" type="email" placeholder="Insira seu email."/>
        <Label htmlFor="confirm">Confirme seu email</Label>
        <Input id="confirm" type="email" placeholder="Insira seu email novamente."/>
        <Label htmlFor="password">Crie uma senha</Label>
        <Input id='password' type="password" placeholder="Crie uma senha."/>
        <Label htmlFor="name">Como devemos chamar você?</Label>
        <Input id='name' type="text" placeholder="Insira um nome de perfil."/>
        <legend>Qual é o seu gênero?</legend>  
          <label>
            <input type="radio" value="masculino" name="gender" checked={genero === 'masculino'} onChange={handleGenero} /> Masculino
          </label>
          <label>
            <input type="radio" value="feminino" name="gender" checked={genero === 'feminino'} onChange={handleGenero} /> Feminino
          </label>
          <label>
            <input type="radio" value="naoBinario" name="gender" checked={genero === 'naoBinario'} onChange={handleGenero} /> Não binário
          </label>
          <br />
          <label>
            <input type="checkbox" value="marketing" checked={marketing} onChange={handleMarketing}/>Não quero receber mensagens de marketing do Spotify
          </label>
          <label>
            <input type="checkbox" value="compartilhar" checked={compartilhar} onChange={handleCompartilhar}/>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.
          </label>
          <label>
            <input type="checkbox" value="termos" checked={termos} onChange={handleTermos}/>Eu concordo com os Termos e Condições de Uso do Spotify.
          </label>
          <p>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a Política de Privacidade do Spotify.</p>
        <input type="submit" value="Inscrever-se"/>
      </form>
      <p>Já tem uma conta? <LinkWrapper to="/login"><p style={{color: 'black'}}>Faça login.</p></LinkWrapper></p>
    </ContainerGeral>
  )
}

export default Registration