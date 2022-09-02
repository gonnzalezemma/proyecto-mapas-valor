import React from 'react';

import {
    Routes,
    Route,
  } from "react-router-dom";
  import Register from "./Register";
  import Login from "./Login";


export default function Routing() {
    return (
        <Routes>
       
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        
        
      </Routes>

    );
  }