import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, ContainerItem, ContainerInfo, ContainerLogo } from './styles'

function SideBar() {

  return (
    <ContainerGeral>
      <LinkWrapper to="/">
        <ContainerLogo>
            <img src="/assets/logo/logo.png" alt="logo so site" />
            <h2>rubik</h2>
        </ContainerLogo>
      </LinkWrapper>
      <div>
        <LinkWrapper to="/home">
          <ContainerItem>
            <img id="home" alt="" />
            <p>Início</p>
          </ContainerItem>
        </LinkWrapper>
        <ContainerItem>
          <img id="search" alt="" />
          <p>Buscar</p>
        </ContainerItem>
        <ContainerItem>
          <img id="library" alt="" />
          <p>Sua Biblioteca</p>
        </ContainerItem>
        <br />
        <ContainerItem>
          <img id="playlist" alt="" />
          <p>Criar playlist</p>
        </ContainerItem>
        <ContainerItem>
          <img id="music" alt="" />
          <p>Músicas Curtidas</p>
        </ContainerItem>
      </div>
      <ContainerInfo>
        <p>Cookies</p>
        <p>Privacidade</p>
      </ContainerInfo>
    </ContainerGeral>
  )
}

export default SideBar