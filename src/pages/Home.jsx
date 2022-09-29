import React from "react";
import Cards from "../components/Cards";
import Dibujo from "../components/Dibujo";
import imagen01 from "./images/01.jpg";
import imagen02 from "./images/02.jpg";
import imagen03 from "./images/03.jpg";




const Home = () => {
  
  return (
    /* heroes */
    
     <div className="container">
      <div className="row">
      <div className="col-md-">
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        {/* <img src={imagen04} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
        <Dibujo/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
        </div>
        
        {/* carrusel */}

      <div className="col-md- mt-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div data-bs-interval="2000" className="carousel-item active" >
              <Cards url = {imagen01} />
              </div>
              <div data-bs-interval="2000" className="carousel-item">
                <Cards url = {imagen02}/> 
              </div>
              <div data-bs-interval="2000" className="carousel-item">
              <Cards url = {imagen03}/>
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
              <span className="visually-hidden">Previous</span>
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
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
