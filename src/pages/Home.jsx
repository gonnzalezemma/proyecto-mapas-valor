import React from "react";
import Heroes from "../components/Heroes";
import Carrusel from "../components/Carrusel";
import News from "./news";

const Home = () => {
  return (
    <>
      <Heroes
        tittle='Obtenga datos directos con GeoFor'
        subtitle='Sepa antes que nadie los datos mas relevantes de su campo'
        paragraph='Con nosotros puede saber de forma rapida y precisa los datos mas relevantes de una parcela en particular como ser:'
      />
      <Carrusel />
    </>
  );
};

export default Home;
