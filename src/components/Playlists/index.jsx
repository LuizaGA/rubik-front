import { useNavigate } from 'react-router-dom'
import { ContainerGeral, ContainerItem } from './styles'

function Playlists({dados}){

  const navigate = useNavigate();

  function Redirecionar(id) {
    navigate(`/playlist/${id}`);
  }

  return(
    <ContainerGeral>
      {dados ? dados.map(item => {
        return(
          <ContainerItem key={item.id} onClick={() => {Redirecionar(item.id)}}>
            <img src={item.imagem}/>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>   
          </ContainerItem>
        )}): null}  
    </ContainerGeral>
  )
}


export default Playlists