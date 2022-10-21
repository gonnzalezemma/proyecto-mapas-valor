import React, { createContext, useContext, useState } from "react";

const mapContext = createContext();

export const useMaps = () => {
  const context = useContext(mapContext);
  if (!context) throw new Error("The context is missing");
  return context;
};

export const MapProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const values = {
    login,
    setLogin,
  };

  return <mapContext.Provider value={values}>{children}</mapContext.Provider>;
};
