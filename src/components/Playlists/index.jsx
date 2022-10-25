import { useNavigate } from 'react-router-dom'
import { ContainerGeral, ContainerItem } from './styles'
import { useSong } from '../../context/song';

function Playlists({dados}){

  const {ActivePlaylist, setActivePlaylist, setReload, reload} = useSong()

  const navigate = useNavigate();

  function Redirecionar(id) {
    navigate(`/playlist/${id}`);
    setActivePlaylist(id);
  }

  return(
    <ContainerGeral>
      {dados ? dados.map(item => {
        return(
          <ContainerItem key={item._id} onClick={() => {Redirecionar(item._id)}}>
            <img src={`data:image/png;base64,${item.imagePath}`}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>   
          </ContainerItem>
        )}): null}  
    </ContainerGeral>
  )
}


export default Playlists