import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, ContainerLogo, Container, Botao, ContainerMobile, TextoMobileDestaque, TextoMobile, ContainerUser, MenuUser } from './styles'

function TopBar() {
  const [showMenu, setShowMenu] = useState(false)
  const [optionsUser, setOptionsUser] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [name, setName] = useState(localStorage.getItem('name'))

  const navigate = useNavigate()

  function handleLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('gender')
    localStorage.removeItem('name')
    localStorage.removeItem('birthday')
    localStorage.removeItem('id')
    navigate('/')
  }


  return (
    <div>
    <ContainerGeral>
      <LinkWrapper to="/">
        <ContainerLogo>
            <img src="/assets/logo/logo.png" alt="logo so site" />
            <h2>rubik</h2>
        </ContainerLogo>
      </LinkWrapper>
        {token ? 
        <>
          <ContainerUser onClick={() => setOptionsUser(!optionsUser)}>
            <img src="https://w7.pngwing.com/pngs/21/228/png-transparent-computer-icons-user-profile-others-miscellaneous-face-monochrome.png" alt="foto user"/>
            <p>{name}</p>
            <img src={optionsUser ? "/assets/icons/up.svg" : "/assets/icons/down.svg" } id="seta"/>
          </ContainerUser>
          <img src="/assets/icons/bars.png" alt="ícone menu" id="menu" onClick={() => setShowMenu(!showMenu)}/>
        </>
        : 
        <Container>
          <LinkWrapper to="/registration"><p>Inscrever-se</p></LinkWrapper>
          <LinkWrapper to="/login"><Botao> Entrar </Botao></LinkWrapper>
          <img src="/assets/icons/bars.png" alt="ícone menu"  onClick={() => setShowMenu(!showMenu)}/>
        </Container>
      }
      
    </ContainerGeral>
    {showMenu && 
    <ContainerMobile>
      <img src="/assets/icons/X.png" alt="fechar" onClick={() => setShowMenu(!showMenu)}/>
      <LinkWrapper to="/home"><TextoMobileDestaque>Início</TextoMobileDestaque></LinkWrapper>
      <LinkWrapper to="/search"><TextoMobileDestaque>Buscar</TextoMobileDestaque></LinkWrapper>
      <LinkWrapper to="/library"><TextoMobileDestaque>Biblioteca</TextoMobileDestaque></LinkWrapper>
      {token ? 
      <>
      <LinkWrapper to="/perfil"><TextoMobileDestaque>Perfil</TextoMobileDestaque></LinkWrapper>
      <TextoMobileDestaque onClick={() => handleLogout()}>Sair</TextoMobileDestaque>
      </>
      :
      <>
      <LinkWrapper to="/login"><TextoMobileDestaque>Entre</TextoMobileDestaque></LinkWrapper>
      <LinkWrapper to="/registration"><TextoMobileDestaque>Inscreva-se</TextoMobileDestaque></LinkWrapper>
      </>
      }
      <br/>
      <br/>
      <TextoMobile>Premium</TextoMobile>
      <TextoMobile>Ajuda</TextoMobile>
      <LinkWrapper to="/home"><TextoMobile>Baixar</TextoMobile></LinkWrapper>
      <TextoMobile>Privacidade</TextoMobile>
      <TextoMobile>Condições</TextoMobile>
    </ContainerMobile> || null}
    {optionsUser ?
    <MenuUser>
      <LinkWrapper to="/perfil"><p>Perfil</p></LinkWrapper>
      <p onClick={() => handleLogout()}>Sair</p>
    </MenuUser>
    : null}
    </div>
  )
}

export default TopBar