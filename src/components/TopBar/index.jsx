import LinkWrapper from '../LinkWrapper' 
import { useState } from 'react'
import { ContainerGeral, ContainerLogo, Container, Botao, ContainerMobile, TextoMobileDestaque, TextoMobile, ContainerUser } from './styles'

function TopBar() {
  const [showMenu, setShowMenu] = useState(false)
  const [isLogged, setLogged] = useState(false)


  return (
    <div>
    <ContainerGeral>
      <LinkWrapper to="/">
        <ContainerLogo>
            <img src="/assets/logo/logo.png" alt="logo so site" />
            <h2>rubik</h2>
        </ContainerLogo>
      </LinkWrapper>
        {isLogged ? 
        <>
          <ContainerUser>
            <img src="https://w7.pngwing.com/pngs/21/228/png-transparent-computer-icons-user-profile-others-miscellaneous-face-monochrome.png" alt="foto user"/>
            <p>Nome user</p>
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