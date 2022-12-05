import React, {useState, useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {  Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from "yup";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import { useDispatch, useSelector } from "react-redux";



export const LoginForm = () => {

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const { message } = useSelector((state) => state.message);


  const dispatch = useDispatch();

useEffect(() => {
  dispatch(clearMessage());

},[dispatch])




  const initialValues = {
    email: "",
    password: "",
  };



  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Es necesario agregar el email"),
    password: Yup.string().required("La contraseña es requerida"),
  });
  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    console.log(email, password);
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
       navigate("/perfil");
        window.location.reload(); 
      })
      .catch(() => {
        setLoading(false);
      });

  }
   if (isLoggedIn) {
    return <Navigate to="/perfil" />;
  } 

  return (
    <div className='container'>
      <div className='row-lg-5 mt-5 d-flex justify-content-center'>
        <div className='col-md-5 '>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
          <Form>
            <div
              className='card text-white'
              style={{ backgroundColor: "#024554", maxWidth: "30rem" }}
            >
              <div className='card-header border-white text-center'>
                <h3 className=' text-center'>Iniciar sesion</h3>
              </div>
              <div className='card-body'>
                <div className='mb-3'>
                  <h5 className='text-start'>Email</h5>
                {/*   <input
                    className='form-control'
                    placeholder='ingrese un nombre de usuario'
                  /> */}
                   <Field className='form-control' placeholder='ingrese su correo electronico' name="email" type="text" />
                   <ErrorMessage name="email" component="div" style={{color:"red"}}/>
                </div>

                <div className='mb-3'>
                  <h5 className='text-start'>Contraseña</h5>
             {/*      <input
                    className='form-control'
                    placeholder='Ingrese su contraseña'
                  /> */}
                <Field  className='form-control'
                    placeholder='Ingrese su contraseña' name="password" type="password" />
                <ErrorMessage name="password" component="div" style={{color:"red"}}/>
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
                
                  <button type="submit" disabled={loading} className='btn btn-light'>
                    {" "}
                    iniciar sesion
                  </button>
          
              </div>
            </div>
          </Form>
          </Formik>
        </div>
        {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
