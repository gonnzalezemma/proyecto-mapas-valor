import React from 'react';
//jorge branch
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Register from "../pages/Register";
  import Login from "../pages/Login";
  import Home from "../pages/Home";
  import Inicio from "../pages/Inicio";
  import Perfil from "../pages/Perfil";
export default function Routing() {
    return (
        <Routes>
        <Route path='' element={<Home/>} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Inicio" element={<Inicio/>} />
        <Route path="Perfil" element={<Perfil/>} />
        
        
      </Routes>

    );
  }