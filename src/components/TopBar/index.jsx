import LinkWrapper from '../LinkWrapper' 
import { useState } from 'react'
import { ContainerGeral, ContainerLogo, Container, Botao, ContainerMobile, TextoMobileDestaque, TextoMobile } from './styles'

function TopBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
    <ContainerGeral>
      <LinkWrapper to="/">
        <ContainerLogo>
            <img src="/logo.png" alt="logo so site" />
            <h2>rubik</h2>
        </ContainerLogo>
      </LinkWrapper>
      <Container>
        <LinkWrapper to="/registration"><p>Inscrever-se</p></LinkWrapper>
        <LinkWrapper to="/login"><Botao> Entrar </Botao></LinkWrapper>
        <img src="/bars.png" alt="ícone menu"  onClick={() => setShowMenu(!showMenu)}/>
      </Container>
    </ContainerGeral>
    {showMenu && 
    <ContainerMobile>
      <img src="X.png" alt="fechar aba menu" onClick={() => setShowMenu(!showMenu)}/>
      <LinkWrapper to="/login"><TextoMobileDestaque>Entre</TextoMobileDestaque></LinkWrapper>
      <LinkWrapper to="/registration"><TextoMobileDestaque>Inscreva-se</TextoMobileDestaque></LinkWrapper>
      <br/>
      <br/>
      <TextoMobile>Premium</TextoMobile>
      <TextoMobile>Ajuda</TextoMobile>
      <LinkWrapper to="/home"><TextoMobile>Baixar</TextoMobile></LinkWrapper>
      <TextoMobile>Privacidade</TextoMobile>
      <TextoMobile>Condições</TextoMobile>
    </ContainerMobile> || null}
    </div>
  )
}

export default TopBar