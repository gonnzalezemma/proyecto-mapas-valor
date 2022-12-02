import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import parcelas from "../components/assets/parcelas.png";
import precision from "../components/assets/agricultura-precisión-2.jpg";
import { Link } from "react-router-dom";

export const HomeCards = () => {
  return (
    <Container>
      <Row className=' mt-4 mb-4 d-flex justify-content-center align-items-center'>
        <Col xl={5}>
          <Card>
            <Card.Img height={250} className='' variant='top' src={parcelas} />
            <Card.Body className='text-center mt-2'>
              <Card.Title className='fw-bold mb-3'>
                Gestión de parcelas
              </Card.Title>
              <p>
                Le brindamos a nuestros usuarios la posibilidad de gestionar sus
                parcelas a través de un mapa interactivo.
              </p>
              <Button
                as={Link}
                to='/gestion'
                className='mt-5'
                variant='outline-danger'
              >
                Más información
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={5}>
          <Card>
            <Card.Img variant='top' height={250} src={precision} />
            <Card.Body className='text-center mt-2'>
              <Card.Title className='fw-bold mb-3'>
                Datos geo-referenciados
              </Card.Title>
              <p>
                Le brindamos a nuestros usuarios la posibilidad de gestionar sus
                parcelas a través de un mapa interactivo.
              </p>
              <Button
                as={Link}
                to='/maps'
                className='mt-5'
                variant='outline-danger'
              >
                Más información
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
