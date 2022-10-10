import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import HomeUser from "../pages/HomeUser";
import Playlist from "../pages/Playlist";
import Perfil from "../pages/Perfil";
import Search from "../pages/Search";
import Library from "../pages/Library";
import CreatePlaylist from "../pages/CreatePlaylist";

function Path(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomeUser />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/new-playlist" element={<CreatePlaylist />} />

    </Routes>
  )
}

export default Path