import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import { ContainerGeral } from './styles'

function Search() {

  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h2>Página de Busca</h2>
      </ContainerGeral>
    </div>
  )
}

export default Search