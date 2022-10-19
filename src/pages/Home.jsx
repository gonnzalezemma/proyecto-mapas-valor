import React from "react";


/* import Cards from "../components/Cards";
import Dibujo from "../components/Dibujo";
import imagen01 from "./images/01.jpg";
import imagen02 from "./images/02.jpg";
import imagen03 from "./images/03.jpg"; */
import Heroes from "../components/Heroes";
import Carrusel from "../components/Carrusel";


const Home = () => {
  return (
    <>
      <Heroes
        tittle="Obtenga datos directos con GeoFor"
        subtitle="Sepa antes que nadie los datos mas relevantes de su campo"
        paragraph="Con nosotros puede saber de forma rapida y precisa los datos mas relevantes de una parcela en particular como ser:"
        />
      <Carrusel />
    </>
  );
};

export default Home;
