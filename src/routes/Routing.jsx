import React from 'react';
//jorge branch
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Register from "./Register";
  import Login from "./Login";
  import Home from "../pages/Home";
  import Inicio from "../pages/Inicio";

export default function Routing() {
    return (
        <Routes>
        <Route path='' element={<Home/>} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Inicio" element={<Inicio/>} />
        
        
      </Routes>

    );
  }