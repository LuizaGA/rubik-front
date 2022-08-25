import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import Playlist from "../../components/Playlist"
import { ContainerGeral } from './styles'

function User() {

  const dados = [
    {id:1, nome: 'All Out 2010s ', descricao: 'The biggest songs of th 2010s.', imagem: 'https://static.poder360.com.br/2022/03/Monroe-848x477.jpg'},
    {id:2, nome: 'RapCaviar', descricao:'Music from Drake, Offset and 42 Dugg.', imagem: 'https://i.pinimg.com/originals/59/c0/e6/59c0e66960767fb2905c8c2b8925fb14.jpg'},
    {id:3, nome: 'Rock Classics', descricao:'Rock legends & epic songs that continue to inspire.', imagem: 'https://st4.depositphotos.com/36834736/38806/i/600/depositphotos_388062338-stock-photo-dramatic-stormy-dark-cloudy-sky.jpg'},
    {id:4, nome: 'RapCaviar', descricao:'Music from Drake, Offset and 42 Dugg.', imagem: 'https://static.poder360.com.br/2022/03/Monroe-848x477.jpg'},
    {id:5, nome: 'Peaceful Piano', descricao:'Relax and indulfe with beautiful piano pieces.', imagem: 'https://st4.depositphotos.com/36834736/38806/i/600/depositphotos_388062338-stock-photo-dramatic-stormy-dark-cloudy-sky.jpg'},
    {id:6, nome: 'Deep Focus', descricao:'Keep calm and focus with ambient and post-rock...', imagem: 'https://i.pinimg.com/originals/59/c0/e6/59c0e66960767fb2905c8c2b8925fb14.jpg'},
    {id:7, nome: 'Instrumental Study', descricao:'A soft music backdrop for your studies', imagem: 'https://static.poder360.com.br/2022/03/Monroe-848x477.jpg'},
    {id:8, nome: 'Mood Booster', descricao:'Get happy with today dose of feel-good songs!', imagem: 'https://i.pinimg.com/originals/59/c0/e6/59c0e66960767fb2905c8c2b8925fb14.jpg'},
    {id:6, nome: 'Deep Focus', descricao:'Keep calm and focus with ambient and post-rock...', imagem: 'https://i.pinimg.com/originals/59/c0/e6/59c0e66960767fb2905c8c2b8925fb14.jpg'},
    {id:7, nome: 'Instrumental Study', descricao:'A soft music backdrop for your studies', imagem: 'https://static.poder360.com.br/2022/03/Monroe-848x477.jpg'},
    {id:8, nome: 'Mood Booster', descricao:'Get happy with today dose of feel-good songs!', imagem: 'https://i.pinimg.com/originals/59/c0/e6/59c0e66960767fb2905c8c2b8925fb14.jpg'},
    
  ]

  return (
    <div >
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h3>Rubik Playlists</h3>
        <Playlist dados={dados}/>
      </ContainerGeral>
    </div>
  )
}

export default User