import React from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";

export const Perfil = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Card className='mt-5' border='black'>
        <Card.Header
          style={{ backgroundColor: "#024554", borderColor: "black" }}
          className='text-center text-white'
          border='black'
        >
          <h3 className='mt-1'>Complete su perfil</h3>
        </Card.Header>

        <Card.Body border='black'>
          <Form className='mt-2'>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Nombre</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Apellido</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>DNI</Card.Title>
                  </Form.Label>
                  <Form.Control type='number' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Ocupacion</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Form.Group className='mb-3'>
                      <Form.Label className='mb-0'>
                        <Card.Title>Lugar de residencia</Card.Title>
                      </Form.Label>
                      <Form.Control type='text' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className='mb-3'>
                      <Form.Label className='mb-0'>
                        <Card.Title>Provincia</Card.Title>
                      </Form.Label>
                      <Form.Select>
                        <option value='1'>Formosa</option>
                        <option value='2'>Chaco</option>
                        <option value='3'>Corrientes</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Ubicaciones de interes</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Organizacion</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-0'>
                    <Card.Title>Funcion en la empresa/organizacion</Card.Title>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className='text-center'>
            <Button onclick={handleSubmit}>Completado!</Button>
          </div>
        </Card.Body>

        <Card.Footer
          style={{ backgroundColor: "#024554", borderColor: "black" }}
          border='black'
        >
          <ProgressBar
            className='m-3'
            variant='success'
            animated
            label={`${60}%`}
            now={50}
          />
        </Card.Footer>
      </Card>
    </Container>
  );
};