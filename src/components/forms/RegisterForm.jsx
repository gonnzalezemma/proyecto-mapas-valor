import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage,  } from "formik";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import { useMaps } from "../../context/MapContext"; */

export const RegisterForm = () => {
/*   const { RegisterUser } = useMaps(); */
  const data = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <Formik
        initialValues={data}
        validationSchema={yup.object({
          email: yup
            .string()
            .required("el usuario es obligatorio.")
            .email("el email no es valido"),
          password: yup.string().required("la contraseña es obligatoria."),
        })}
        onSubmit={async (values, actions) => {
          await RegisterUser(values);
          // console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <div className='row-lg-5 mt-5 d-flex justify-content-center'>
            <div className='col-md-5'>
              <Form onSubmit={handleSubmit}>
                <div
                  className='card text-bg-dark mb-3 p-0'
                  style={{ maxWidth: "30rem" }}
                >
                  <div
                    className='card-body'
                    style={{ backgroundColor: "#024554" }}
                  >
                    <h3 className='card-title text-center'>
                      Registrar usuario
                    </h3>
                    <div className='mb-2'>
                      <h5>Email</h5>
                      <Field
                        name='email'
                        className='form-control'
                        placeholder='ingrese su email'
                      />
                      <ErrorMessage
                        component='p'
                        name='email'
                        className='text-danger font-weight-bold'
                      />
                    </div>

                    <div className='mb-2'>
                      <h5>Contraseña</h5>
                      <Field
                        name='password'
                        className='form-control'
                        placeholder='Ingrese su contraseña'
                        type='password'
                      />
                      <ErrorMessage
                        component='p'
                        name='password'
                        className='text-danger font-weight-bold'
                      />
                    </div>

                    <p className='card-text text-center'>
                      Si ya esta registrado{" "}
                      <Link
                        to='/Register'
                        style={{ color: "black", textDecoration: "underline" }}
                      >
                        {" "}
                        Inicie sesion aqui
                      </Link>
                    </p>
                    <div className='text-end'>
                      <button type='submit' className='btn btn-light'>
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </Container>
  );
};
