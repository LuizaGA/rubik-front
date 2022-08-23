import Header from "../../components/Header"
import Footer from "../../components/Footer"
import LinkWrapper from "../../components/LinkWrapper"
import { ContainerGeral, ContainerTexto, ImgCubo, TextoSpotify, TextoDestaque, TextoSecundario, TextoObs, Botao, TextoBotao } from './styles'


function Home() {
 

  return (
    <div>
      <Header />
      <ContainerGeral>
          <ContainerTexto>
            <TextoSpotify>RUBIK PREMIUM</TextoSpotify>
            <TextoDestaque>Aproveite 3 mess de Premium por R$ 0,00</TextoDestaque>
            <TextoSecundario>Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser.</TextoSecundario>
            <Botao>
              <LinkWrapper to="/registration"><TextoBotao> aproveite 3 meses grátis</TextoBotao></LinkWrapper> 
            </Botao>
            <TextoObs>Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. Oferta válida até 11 de setembro de 2022.</TextoObs>
          </ContainerTexto>
          <div>
            <ImgCubo src="cubeMelting.jpg" alt="cubo derretendo" />
          </div>
          
      </ContainerGeral>
      <Footer />
    </div>
  )
}

export default Home