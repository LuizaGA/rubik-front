import LinkWrapper from '../LinkWrapper' 
import { ContainerGeral, Container, ContainerLogo, Logo, NomeSite, Lista , PrimeiroItem, Item, ContainerFinal, ItemPequeno } from './styles'

function Footer(){

  return(
    <ContainerGeral>
      <Container>
        <ContainerLogo>
          <Logo src="cube.png" alt="logo empresa" />
          <NomeSite>Rubik</NomeSite>
        </ContainerLogo>
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
          <Item>Player da Web</Item>
          <Item>Aplicativo móvel grátis</Item>
        </Lista>
      </Container>
      <ContainerFinal>
        <ItemPequeno>Legal</ItemPequeno>
        <ItemPequeno>Centro de Privacidade</ItemPequeno>
        <ItemPequeno>Política de Privacidade</ItemPequeno>
        <ItemPequeno>Cookies</ItemPequeno>
        <ItemPequeno>Sobre Anúncios</ItemPequeno>
      </ContainerFinal>
    </ContainerGeral>
  )
}

export default Footer