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
          <ItemDestaque><LinkWrapper to="/FAQ" style={{fontWeight:700}}>Suporte</LinkWrapper></ItemDestaque>
          <ItemDestaque>Baixar</ItemDestaque>
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