import * as yup from "yup";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useMaps } from "../../context/MapContext";

export const LoginForm = () => {
  const { LoginUser, login, setLogin } = useMaps();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className='container'>
      <Formik
        initialValues={data}
        validationSchema={yup.object({
          email: yup.string().required("el usuario es obligatorio."),
          password: yup.string().required("la contraseña es obligatoria."),
        })}
        onSubmit={async (values, actions) => {
          await LoginUser(values);
        }}
      >
        {({ handleSubmit /* setFieldValue, isSubmiting */ }) => (
          <div className='row-lg-5 mt-5 d-flex justify-content-center'>
            <div className='col-md-5 '>
              <Form onSubmit={handleSubmit}>
                <div
                  className='card text-white'
                  style={{ backgroundColor: "#024554", maxWidth: "30rem" }}
                >
                  <div className='card-header border-white text-center'>
                    <h3 className=' text-center'>Iniciar sesion</h3>
                  </div>
                  <div className='card-body'>
                    <div className='mb-3'>
                      <h5 className='text-start'>Usuario</h5>
                      <Field
                        name='email'
                        className='form-control'
                        placeholder='ingrese un nombre de usuario'
                      />
                      <ErrorMessage
                        component='p'
                        name='email'
                        className='text-danger font-weight-bold'
                      />
                    </div>

                    <div className='mb-3'>
                      <h5 className='text-start'>Contraseña</h5>
                      <Field
                        name='password'
                        className='form-control'
                        placeholder='ingrese su contraseña'
                        type='password'
                      />
                      <ErrorMessage
                        component='p'
                        name='password'
                        className='text-danger font-weight-bold'
                      />
                    </div>

                    <p className='card-text text-center'>
                      Si no esta registrado{" "}
                      <Link to='/Register' style={{ color: "black" }}>
                        {" "}
                        Registrese aqui
                      </Link>
                    </p>
                  </div>
                  <div className='card-footer text-end border-white'>
                    <button type='submit' className='btn btn-light'>
                      {" "}
                      iniciar sesion
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
