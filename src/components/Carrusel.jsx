import React from "react";
import Cards from "./Cards";
import imagen1 from "../pages/images/01.jpg"
import imagen2 from "../pages/images/02.jpg"
import imagen3 from "../pages/images/03.jpg"


const Carrusel = () => {
    const lorems="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus similique iusto eaque minus impedit animi. Assumenda temporibus non molestias neque recusandae, maiores cumque qui consequatur vitae, modi, saepe perferendis!"
  return (
    <>
      <div className="container">
        <div className="row">
          {/* carrusel */}

          <div className="col-md- mt-5">
            <div id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true">

              <div className="carousel-inner">
                <div data-bs-interval="2000" className="carousel-item active">
                  <Cards url={imagen1} tittle="mapa calor" paragraph={lorems}/> 
                </div>
                <div data-bs-interval="2000" className="carousel-item">
                  <Cards url={imagen2} tittle="mapa calor" paragraph={lorems}/>
                </div>
                <div data-bs-interval="2000" className="carousel-item">
                  <Cards url={imagen3} tittle="lluvia" paragraph={lorems}/>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrusel;
