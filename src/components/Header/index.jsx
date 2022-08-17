import { useState } from 'react'
import LinkWrapper from '../LinkWrapper' 
import HeaderMobile from '../HeaderMobile'
import {Container, ContainerGeral, Logo, NomeSite, Lista, Item, Menu} from './styles.js'

function Header(){
  const [showMenu, setShowMenu] = useState(false)

  return(
    <ContainerGeral>
      <Container>
      <Logo src='/cube.png'alt="logo do site"/>
      <NomeSite>Rubik</NomeSite>
      </Container>
      <Container>
      <Lista style={{marginRight: '1rem'}}>
        <Item>Premium</Item>
        <Item><LinkWrapper to="/FAQ">Suporte</LinkWrapper></Item>
        <Item>Baixar</Item>
      </Lista>
      <Lista style={{borderLeft: '1px solid white'}}>
        <Item><LinkWrapper to="/registration">Inscrever-se</LinkWrapper></Item>
        <Item><LinkWrapper to="/login">Entrar</LinkWrapper></Item>
      </Lista>
      <Menu src='/bars.png' alt="símbolo menu" onClick={() => setShowMenu(!showMenu)}/>
      {showMenu && <HeaderMobile state={ setShowMenu }/> || null}
      </Container>
    </ContainerGeral>
  )
}

export default Header