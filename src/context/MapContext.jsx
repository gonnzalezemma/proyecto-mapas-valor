import React, { createContext, useContext, useRef, useState } from "react";

const mapContext = createContext();

export const useMaps = () => {
  const context = useContext(mapContext);
  if (!context) throw new Error("The context is missing");
  return context;
};

export const MapProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [mapLayers, setMapLayers] = useState([]);
  const mapRef = useRef();

  const values = {
    login,
    setLogin,
    mapRef,
    mapLayers,
    setMapLayers,
  };

  return <mapContext.Provider value={values}>{children}</mapContext.Provider>;
};
