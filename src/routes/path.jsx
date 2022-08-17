import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

function Path(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Path