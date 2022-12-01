import React, { createContext, useContext, useRef, useState } from "react";
import { create_profile_req } from "../api/perfil";
import { loginUser, regUserRequest } from "../api/users";
import { setAuthToken } from "../auth/AuthToken";
import { useNavigate } from "react-router-dom";

const mapContext = createContext();

export const useMaps = () => {
  const context = useContext(mapContext);
  if (!context) throw new Error("The context is missing");
  return context;
};

export const MapProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [mapLayers, setMapLayers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const mapRef = useRef();

  //inicio de sesion...
  const LoginUser = async (userData) => {
    try {
      const res = await loginUser(userData);
      console.log(res);

      if (res.status === 200) {
        setLogin(!login);
        navigate("/");
      }

      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("token-init-date", new Date().getTime());
      setAuthToken(token);
      setToken(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  //registro...
  const RegisterUser = async (registerData) => {
    const res = await regUserRequest(registerData);
    console.log(res.data);
    if (res.status === 200) {
      navigate("/login");
    }
  };

  //guardar perfil...
  const RegProfile = async (profileData) => {
    const res = await create_profile_req(profileData);
    console.log(res);
  };

  const values = {
    login,
    Logout,
    mapRef,
    mapLayers,
    errors,
    setErrors,
    setLogin,
    setMapLayers,
    LoginUser,
    RegisterUser,
    RegProfile,
    token
  };

  return <mapContext.Provider value={values}>{children}</mapContext.Provider>;
};
