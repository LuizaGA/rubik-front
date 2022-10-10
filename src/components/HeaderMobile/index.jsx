import { useState } from 'react'
import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, Container, BtnFechar, Lista, ItemDestaque, Item} from './styles'


function HeaderMobile({state}){

  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('gender')
    localStorage.removeItem('name')
    localStorage.removeItem('birthday')
    localStorage.removeItem('id')
    closeMenu()
  }
  
  function closeMenu(){
    state(false)
  }

  return(
    <ContainerGeral>
      <Container>
      <BtnFechar src="/assets/icons/X.png" alt="fechar" onClick={() => closeMenu()}/>
        <Lista>
          <ItemDestaque>Premium</ItemDestaque>
          <LinkWrapper to="/FAQ"><ItemDestaque>Suporte</ItemDestaque></LinkWrapper>
          <LinkWrapper to="/home"><ItemDestaque>Baixar</ItemDestaque></LinkWrapper>
        </Lista>
          {token ? 
          <Lista>
            <Item><LinkWrapper to="/perfil">Perfil</LinkWrapper></Item>
            <Item onClick={() => handleLogout()}>Sair</Item>
          </Lista>
          :
            <Lista>
              <Item><LinkWrapper to="/registration">Inscrever-se</LinkWrapper></Item>
              <Item><LinkWrapper to="/login">Entrar</LinkWrapper></Item>
            </Lista>
          }
      </Container>
    </ContainerGeral>
  )
}

export default HeaderMobile