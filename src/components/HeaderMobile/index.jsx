import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, Container, BtnFechar, Lista, ItemDestaque, Item} from './styles'


function HeaderMobile({state}){
  
  function closeMenu(){
    state(false)
  }

  return(
    <ContainerGeral>
      <Container>
      <BtnFechar src="X.png" alt="fechar" onClick={() => closeMenu()}/>
        <Lista>
          <ItemDestaque>Premium</ItemDestaque>
          <LinkWrapper to="/FAQ"><ItemDestaque>Suporte</ItemDestaque></LinkWrapper>
          <LinkWrapper to="/home"><ItemDestaque>Baixar</ItemDestaque></LinkWrapper>
        </Lista>
        <Lista>
          <Item><LinkWrapper to="/registration">Inscrever-se</LinkWrapper></Item>
          <Item><LinkWrapper to="/login">Entrar</LinkWrapper></Item>
        </Lista>
      </Container>
    </ContainerGeral>
  )
}

export default HeaderMobile