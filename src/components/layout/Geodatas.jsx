import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import { Row, Col } from "react-bootstrap";
import logo from "../assets/Logo.png"

export const Geodatas = () => {
  return (
    <div
      style={{ backgroundColor: "#024554" }}
      className='mt-5 mb-5 text-white text-center'
    >
      <Row className=' d-flex justify-content-center align-items-center'>
        <Col xl={5}>
          <img src={logo} width='200' alt='logo' />
        </Col>
        <Col xl={5} className='text-start'>
          <h2 className='mb-4'>
            <MDBIcon fas icon='map-marked-alt' className='mx-4' />
            Acceso gratuito.
          </h2>
          <h2 className='mb-4'>
            <MDBIcon fas icon='satellite' className='mx-4' /> Datos en tiempo
            real.
          </h2>
          <h2 className='mb-4'>
            <MDBIcon fas icon='crosshairs' className='mx-4' /> Gran precisión de los datos.
          </h2>
        </Col>
      </Row>
    </div>
  );
}

