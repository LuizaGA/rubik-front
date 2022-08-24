import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, ContainerItem, ContainerInfo } from './styles'

function SideBar() {

  return (
    <ContainerGeral>
      <div>
        <LinkWrapper to="/">
          <ContainerItem>
            <img src="/home.png" alt="" />
            <p>Início</p>
          </ContainerItem>
        </LinkWrapper>
        <ContainerItem>
          <img src="/search.png" alt="" />
          <p>Buscar</p>
        </ContainerItem>
        <ContainerItem>
          <img src="/library.png" alt="" />
          <p>Sua Biblioteca</p>
        </ContainerItem>
        <ContainerItem>
          <img src="/more.png" alt="" />
          <p>Criar playlist</p>
        </ContainerItem>
        <ContainerItem>
          <img src="/heart.png" alt="" />
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