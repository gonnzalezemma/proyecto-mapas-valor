import React from "react";
import "../css/background.css";
import Heroes from "../components/layout/Heroes";
import Footer from "../components/layout/Footer";
import { HomeCards } from "../layouts/HomeCards";
import { Geodatas } from "../components/layout/Geodatas";

// import News from "./news";

const Home = () => {
  return (
    <>
      <div className='background-image'>
        <Heroes
          tittle='GeoDatas'
          subtitle='Información de valor, precisa y en tiempo real.'
          paragraph='Con nosotros puede saber de forma rapida y precisa los datos mas relevantes de una parcela en particular como ser:'
        />
      </div>
      <Geodatas />
      <HomeCards />
      <Footer />
    </>
  );
};

export default Home;
