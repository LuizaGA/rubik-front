import { useRef, useState , useEffect} from 'react';
import api from '../../services/api';
import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import MultiPlayer from "../../components/Multiplayer"
import { ContainerGeral , Input, InputSubmit} from './styles'

function Search() {

  const formRef = useRef(null);
  const [search, setSearch] = useState('');
  const [dataSearch, setDataSearch] = useState()

  function searchSong(){
    api.get(`/song/search?search=${search}`)
    .then((res) => {
      setDataSearch(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  function handleSearch(e){
    e.preventDefault();
    searchSong();
  }

  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h2>Página de Busca</h2>
        <form onSubmit={handleSearch} ref={formRef}>
          <Input type="text" placeholder="Busque por nome da música ou do artista" value={search} onChange={(e) => setSearch(e.target.value)} required/>
          <InputSubmit type="submit" value="Buscar"/>
        </form>
        {dataSearch ?       
          <div>
            <MultiPlayer urls={dataSearch}/>
          </div>
        : null}
      </ContainerGeral>
    </div>
  )
}

export default Search