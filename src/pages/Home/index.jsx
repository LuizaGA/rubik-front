import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ContainerGeral,ImgCubo, TextoSpotify} from './styles'


function Home() {
 

  return (
    <div>
      <Header />
      <ContainerGeral>
          <div>
            <TextoSpotify>RUBIK PREMIUM</TextoSpotify>
            <p>Aproveite 3 mess de Premium por R$ 0,00</p>
            <p>Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser.</p>
            <div>
              <p> aproveite 3 meses grátis</p>
            </div>
          </div>
          <div>
            <ImgCubo src="cubeMelting.jpg" alt="cubo derretendo" />
          </div>
      </ContainerGeral>
      <Footer />
    </div>
  )
}

export default Home