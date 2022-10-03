import { useParams } from "react-router-dom"
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { ContainerGeral, Dados, Musicas } from './styles'
import MultiPlayer from "../../components/Multiplayer";

function Playlist(){
  const params = useParams();

  const dados = [
    {id:1, nome: 'All Out 2010s ', descricao: 'The biggest songs of th 2010s.', imagem: '/src/assets/playlists/capas/2010.webp', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:2, nome: 'RapCaviar', descricao:'Music from Drake, Offset and 42 Dugg.', imagem: '/src/assets/playlists/capas/rap.jpg', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:3, nome: 'Rock Classics', descricao:'Rock legends & epic songs that continue to inspire.', imagem: '/src/assets/playlists/capas/rock.jpg', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    }
      ,
    {id:4, nome: 'Creative Focus', descricao:'Get your creative juices flowing with these ...', imagem: '/src/assets/playlists/capas/creative.jpg', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:5, nome: 'Peaceful Piano', descricao:'Relax and indulfe with beautiful piano pieces.', imagem: '/src/assets/playlists/capas/piano.jpg', 
      musica:[
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:6, nome: 'Deep Focus', descricao:'Keep calm and focus with ambient and post-rock...', imagem: '/src/assets/playlists/capas/focus.jpg', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:7, nome: 'Instrumental Study', descricao:'A soft music backdrop for your studies', imagem: '/src/assets/playlists/capas/instrumental.png', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },
    {id:8, nome: 'Mood Booster', descricao:'Get happy with today dose of feel-good songs!', imagem: '/src/assets/playlists/capas/mood.avif', 
      musica: [
        {id: 1, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 2, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 3, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 4, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'},
        {id: 5, caminho: '/src/assets/playlists/musicas/2cratch-SUPERLIFE.mp3', nome: 'Superlife', nomeArtista: '2Scratch', album:'nomeAlbum2', tempo: '3:10'}, 
        {id: 6, caminho: '/src/assets/playlists/musicas/DjKantik-SeanPaul-Temperature.mp3', nome: 'Temperature', nomeArtista: 'Dj Kantik e Sean Paul', album:'nomeAlbum3', tempo: '3:50'},
        {id: 7, caminho: '/src/assets/playlists/musicas/Naruto-HarukaKanata.mp3', nome: 'nomeMusica', nomeArtista: 'Haruka Kanata', album:'nomeAlbum', tempo: '3:42'} ],
    },   
  ]

  const result = dados.find(({ id }) => id === parseInt(params.id));
  return(
    <div style={{height:'100vh', backgroundColor: "#000000"}}>
      <TopBar />
      <SideBar />
      {!!result ?
        <ContainerGeral>
          <Dados>
            <img src={result.imagem} alt="capa"/>
            <h2>{result.nome}</h2>
          </Dados>
          <Musicas>
            <MultiPlayer urls={result.musica}/>
          </Musicas>
        </ContainerGeral>
      : null }
    </div>
  )
}

export default Playlist