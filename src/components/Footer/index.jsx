import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, Container, ContainerLogo, Logo, NomeSite, Lista , PrimeiroItem, Item, ContainerFinal, ItemPequeno, ContainerVersao } from './styles'

function Footer(){

  return(
    <ContainerGeral>
      <Container>
        <LinkWrapper to="/">
          <ContainerLogo>
            <Logo src="logo.png" alt="logo empresa" />
            <NomeSite>Rubik</NomeSite>
          </ContainerLogo>
        </LinkWrapper>
        <Lista>
          <PrimeiroItem>empresa</PrimeiroItem>
          <Item>Sobre</Item>
          <Item>Empregos</Item>
          <Item>For the Record</Item>
        </Lista>
        <Lista>
          <PrimeiroItem>comunidades</PrimeiroItem>
          <Item>Para Artistas</Item>
          <Item>Desenvolvedores</Item>
          <Item>Publicidades</Item>
          <Item>Investidores</Item>
          <Item>Fornecedores</Item>
        </Lista>
        <Lista>
          <PrimeiroItem>links úteis</PrimeiroItem>
          <Item><LinkWrapper to="/FAQ">Suporte</LinkWrapper></Item>
          <Item><LinkWrapper to="/home">Player da Web</LinkWrapper></Item>
          <Item><LinkWrapper to="/home">Aplicativo móvel grátis</LinkWrapper></Item>
        </Lista>
      </Container>
      <ContainerVersao>
        <ContainerFinal>
          <ItemPequeno>Legal</ItemPequeno>
          <ItemPequeno>Centro de Privacidade</ItemPequeno>
          <ItemPequeno>Política de Privacidade</ItemPequeno>
          <ItemPequeno>Cookies</ItemPequeno>
          <ItemPequeno>Sobre Anúncios</ItemPequeno>
        </ContainerFinal>
        <p>©{new Date().getFullYear()}</p>
      </ContainerVersao>
    </ContainerGeral>
  )
}

export default Footer