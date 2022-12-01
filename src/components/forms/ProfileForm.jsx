import { Formik, Field, Form } from "formik";
import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { useMaps } from "../../context/MapContext";

export const ProfileForm = () => {
  const { RegProfile } = useMaps();
  const data = {
    nombre: "",
    apellido: "",
    celular: "",
    direccion: "",
    ocupacion: "",
    lugarInteres: "",
    organizacion: "",
    funcionOrganizacion: "",
  };

  return (
    <Container>
      <Formik
        initialValues={data}
        onSubmit={async (values, actions) => {
          await RegProfile(values);
          // console.log(values)
        }}
      >
        {({ handleSubmit }) => (
          <Card className='mt-5' border='black'>
            <Card.Header
              style={{ backgroundColor: "#024554" }}
              className='text-center text-white'
            >
              <h3 className='mt-1'>Complete su perfil</h3>
            </Card.Header>
            <Form onSubmit={handleSubmit} className='mt-2'>
              <Card.Body border='black'>
                <Row>
                  <Col xs={12} md={6}>
                    <div className='mb-3'>
                      <h5>Nombre</h5>
                      <Field
                        name='nombre'
                        className='form-control'
                        type='name'
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>Apellido</Card.Title>
                      </h5>
                      <Field
                        name='apellido'
                        className='form-control'
                        type='name'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>Telefono</Card.Title>
                      </h5>
                      <Field
                        name='celular'
                        className='form-control'
                        type='number'
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>Direccion</Card.Title>
                      </h5>
                      <Field
                        name='direccion'
                        className='form-control'
                        type='address'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <div className='mb-3'>
                          <h5 className='mb-0'>
                            <Card.Title>Ocupacion</Card.Title>
                          </h5>
                          <Field
                            name='ocupacion'
                            className='form-control'
                            type='text'
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>Ubicaciones de interes</Card.Title>
                      </h5>
                      <Field
                        name='lugarInteres'
                        className='form-control'
                        type='text'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>Organizacion</Card.Title>
                      </h5>
                      <Field
                        name='organizacion'
                        className='form-control'
                        type='text'
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <h5 className='mb-0'>
                        <Card.Title>
                          Funcion en la empresa/organizacion
                        </Card.Title>
                      </h5>
                      <Field
                        name='funcionOrganizacion'
                        className='form-control'
                        type='text'
                      />
                    </div>
                  </Col>
                </Row>

                <div className='text-center'>
                  <Button type='submit'>Completado!</Button>
                </div>
              </Card.Body>
            </Form>
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
        )}
      </Formik>
    </Container>
  );
};
