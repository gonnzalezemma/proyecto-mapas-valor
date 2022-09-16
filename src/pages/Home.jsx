import React from "react";
import Cards from "../components/Cards";
import Dibujo from "../components/Dibujo";
import imagen01 from "./images/01.jpg";
import imagen02 from "./images/02.jpg";
import imagen03 from "./images/03.jpg";
import imagen04 from "./images/04.jpg";
import Logo from "../components/Logo.png";
import Heroes from "../components/Heroes";
import Carrusel from "../components/Carrusel";

const Home = () => {
  return (
    /* heroes */
    <>
      <Heroes tittle="ejemplo" paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consectetur necessitatibus doloremque commodi quisquam, obcaecati suscipit eligendi! Itaque amet, exercitationem sequi consequatur, laboriosam, rem ipsa ullam et vitae perferendis reiciendis!"/>
      <Carrusel/>
    </>
  );
};

export default Home;
