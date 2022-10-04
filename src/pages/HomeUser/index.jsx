import TopBar from "../../components/TopBar"
import SideBar from "../../components/SideBar"
import Playlists from "../../components/Playlists"
import { ContainerGeral } from './styles'

function HomeUser() {

  const dados = [
    {id:1, nome: 'All Out 2010s ', descricao: 'The biggest songs of th 2010s.', imagem: '/assets/playlists/capas/2010.webp'},
    {id:2, nome: 'RapCaviar', descricao:'Music from Drake, Offset and 42 Dugg.', imagem: '/assets/playlists/capas/rap.jpg'},
    {id:3, nome: 'Rock Classics', descricao:'Rock legends & epic songs that continue to inspire.', imagem: '/assets/playlists/capas/rock.jpg'},
    {id:4, nome: 'Creative Focus', descricao:'Get your creative juices flowing with these ...', imagem: '/assets/playlists/capas/creative.jpg'},
    {id:5, nome: 'Peaceful Piano', descricao:'Relax and indulfe with beautiful piano pieces.', imagem: '/assets/playlists/capas/piano.jpg'},
    {id:6, nome: 'Deep Focus', descricao:'Keep calm and focus with ambient and post-rock...', imagem: '/assets/playlists/capas/focus.jpg'},
    {id:7, nome: 'Instrumental Study', descricao:'A soft music backdrop for your studies', imagem: '/assets/playlists/capas/instrumental.png'},
    {id:8, nome: 'Mood Booster', descricao:'Get happy with today dose of feel-good songs!', imagem: '/assets/playlists/capas/mood.avif'},   
  ]

  return (
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      <ContainerGeral>
        <h2>Rubik Playlists</h2>
        <Playlists dados={dados}/>
      </ContainerGeral>
    </div>
  )
}

export default HomeUser