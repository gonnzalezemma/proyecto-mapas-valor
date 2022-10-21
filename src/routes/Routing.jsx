import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export default function Routing() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
