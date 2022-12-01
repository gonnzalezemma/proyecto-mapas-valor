import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Perfil } from "../pages/Perfil";
import { Maps } from "../pages/Maps";
import { ProfileForm } from "../components/forms/ProfileForm";

export default function Routing() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='perfil' element={<Perfil />} />
      <Route path='maps' element={<Maps />} />
      <Route path='/profile-form' element={<ProfileForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
