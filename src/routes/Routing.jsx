import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Perfil } from "../pages/Perfil";
/* import { SplitMaps } from "../pages/PointMap";*/
import { HeatMap } from "../pages/heatMap"; 
import { PointMap } from "../pages/PointMap";
import  Mapstore from "../pages/Mapstore";


export default function Routing() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path='perfil' element={<Perfil />} />
      <Route path='maps' element={<Mapstore />} />
    </Routes>
  );
}
