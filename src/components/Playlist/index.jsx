import { ContainerGeral, ContainerItem } from './styles'

function Playlist({dados}){
  console.log(dados)
  return(
    <ContainerGeral>
      {dados ? dados.map(item => {
        return(
          <ContainerItem key={item.id}>
          <img src={item.imagem}/>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>   
        </ContainerItem>
        )}): null}  
    </ContainerGeral>
  )
}


export default Playlist