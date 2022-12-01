import React from "react";
import Carrusel from "../components/layout/Carrusel";
import Footer from "../components/layout/Footer";
import Heroes from "../components/layout/Heroes";

const Home = () => {
  return (
    <>
      <Heroes
        tittle='Obtenga datos directos con GeoFor'
        subtitle='Sepa antes que nadie los datos mas relevantes de su campo'
        paragraph='Con nosotros puede saber de forma rapida y precisa los datos mas relevantes de una parcela en particular como ser:'
      />
      <Carrusel />
      <Footer />
    </>
  );
};

export default Home;
