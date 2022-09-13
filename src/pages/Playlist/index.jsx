import { useParams } from "react-router-dom"

function Playlist(){
  const params = useParams();

  return(
    <div>
      <p>{`pag playlist n${params.id}`}</p>
    </div>
  )
}

export default Playlist