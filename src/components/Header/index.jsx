import { useState } from 'react'
import LinkWrapper from '../LinkWrapper' 
import HeaderMobile from '../HeaderMobile'
import {Container, ContainerGeral, Logo, NomeSite, Lista, Item, Menu} from './styles.js'

function Header(){
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('gender')
    localStorage.removeItem('name')
    localStorage.removeItem('birthday')
    localStorage.removeItem('id')
    window.location.reload()
  }

  return(
    <ContainerGeral>
      <LinkWrapper to="/">
        <Container>
        <Logo src='/assets/logo/logo.png'alt="logo do site"/>
        <NomeSite>Rubik</NomeSite>
        </Container>
      </LinkWrapper>
      <Container>
      <Lista style={{marginRight: '1rem'}}>
        <Item>Premium</Item>
        <Item><LinkWrapper to="/FAQ">Suporte</LinkWrapper></Item>
        <Item><LinkWrapper to="/home">Baixar</LinkWrapper></Item>
      </Lista>
      {token ? 
        <Lista style={{borderLeft: '1px solid white'}}>
          <Item><LinkWrapper to="/perfil">Perfil</LinkWrapper></Item>
          <Item onClick={() => handleLogout()}>Sair</Item>
        </Lista>
      :  
        <Lista style={{borderLeft: '1px solid white'}}>
          <Item><LinkWrapper to="/registration">Inscrever-se</LinkWrapper></Item>
          <Item><LinkWrapper to="/login">Entrar</LinkWrapper></Item>
        </Lista>
      }
      <Menu src='/assets/icons/bars.png' alt="símbolo menu" onClick={() => setShowMenu(!showMenu)}/>
      {showMenu && <HeaderMobile state={ setShowMenu }/> || null}
      </Container>
    </ContainerGeral>
  )
}

export default Header