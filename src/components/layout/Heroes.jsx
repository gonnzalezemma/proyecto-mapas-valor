import React from "react";
import Listas from "./Listas";
import mapa from "../../pages/images/mapa.png";

const Heroes = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInUp'>
              <h1 className='text-center display-3 fw-bold lh-1 mb-3'>
                {props.tittle}
              </h1>
              <div className='col-10 col-sm-8 col-lg-4'>
                <img
                  src={mapa}
                  className='d-block mx-lg-auto img-fluid'
                  alt='Bootstrap Themes'
                  width='300'
                  height='500'
                  loading='lazy'
                />
              </div>
              <div className='col-lg-8'>
                <h2 className='display-6 fw-bold lh-1 mb-3'>
                  {props.subtitle}
                </h2>
                <p className='lead'>{props.paragraph}</p>

                <Listas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
