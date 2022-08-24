import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import User from "../pages/User";

function Path(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<User />} />
    </Routes>
  )
}

export default Path