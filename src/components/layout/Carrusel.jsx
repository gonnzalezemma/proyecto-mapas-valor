import React from "react";
import Cards from "./Cards";
import parcelas from "../assets/parcelas.png";
import precision from "../assets/agricultura-precisión-2.jpg";
import imagen3 from "../../pages/images/03.jpg";
import { MDBCarousel } from "mdb-react-ui-kit";
import { MDBCarouselItem } from "mdb-react-ui-kit";
import { MDBContainer } from "mdb-react-ui-kit";

const Carrusel = () => {
  const lorems =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus similique iusto eaque minus impedit animi. Assumenda temporibus non molestias neque recusandae, maiores cumque qui consequatur vitae, modi, saepe perferendis!";
  return (
    // <>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-md- mt-5'>
    //         <div
    //           id='carouselExampleIndicators'
    //           className='carousel slide'
    //           data-bs-ride='true'
    //         >
    //           <div className='carousel-inner'>
    //             <div data-bs-interval='2000' className='carousel-item active'>
    //               <Cards url={imagen1} tittle='mapa calor' paragraph={lorems} />
    //             </div>
    //             <div data-bs-interval='2000' className='carousel-item'>
    //               <Cards url={imagen2} tittle='mapa calor' paragraph={lorems} />
    //             </div>
    //             <div data-bs-interval='2000' className='carousel-item'>
    //               <Cards url={imagen3} tittle='lluvia' paragraph={lorems} />
    //             </div>
    //           </div>
    //           <button
    //             className='carousel-control-prev'
    //             type='button'
    //             data-bs-target='#carouselExampleIndicators'
    //             data-bs-slide='prev'
    //           >
    //             <span
    //               className='carousel-control-prev-icon'
    //               aria-hidden='true'
    //             ></span>
    //             <span className='visually-hidden'>anterior</span>
    //           </button>
    //           <button
    //             className='carousel-control-next'
    //             type='button'
    //             data-bs-target='#carouselExampleIndicators'
    //             data-bs-slide='next'
    //           >
    //             <span
    //               className='carousel-control-next-icon'
    //               aria-hidden='true'
    //             ></span>
    //             <span className='visually-hidden'>siguiente</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <MDBContainer className='mt-4 mb-4 align-items-center'>
      <MDBCarousel showControls dealy={2000} className='rounded'>
        <MDBCarouselItem
          className='w-80 h-40 d-block'
          itemId={1}
          src={parcelas}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-80 h-40 d-block'
          itemId={2}
          src={precision}
          alt='...'
        ></MDBCarouselItem>
        <MDBCarouselItem
          className='w-80 h-40 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg'
          alt='...'
        ></MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carrusel;
