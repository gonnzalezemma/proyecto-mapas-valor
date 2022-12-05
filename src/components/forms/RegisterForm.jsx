import React,{ useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

export const RegisterForm = () => {

  



  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();


useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
    password2: "",
  };
  const validationSchema = Yup.object().shape({

    email: Yup.string()
      .email("No es un mail valido")
      .required("El email es requerido"),
    
      password: Yup.string()
      .test(
        "len",
        "El password debe tener entre 3 y 40 caracteres",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 20 
      )
      
      .required("El password es requerido"),
      password2: Yup.string()
      .test(
        (val)=>

          val
        
      )
      .required("El campo repetir contraseña es requerido")
     
  });

  const handleRegister = (formValue) => {
    const { email, password, password2} = formValue;

    if(password!==password2) {
     console.log("passwords no coinciden")
    }
    setSuccessful(false);

    dispatch(register({ email, password}))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        setSuccessful(false);
      });
  };



  return (
    <Container>
      <div className='row-lg-5 mt-5 d-flex justify-content-center'>
        <div className='col-md-5'>
          <div
            className='card text-bg-dark mb-3 p-0'
            style={{ maxWidth: "30rem" }}
          >
            <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
<Form >
{!successful && (
            <div className='card-body' style={{ backgroundColor: "#024554" }}>
              <h3 className='card-title text-center'>Registrar usuario</h3>
              <h5>Email</h5>
             {/*  <input
                className='form-control me-2'
                placeholder='ingrese su email'
                aria-label='Search'
              /> */}
              <Field name="email" type="text" placeholder='ingrese su email'
                aria-label='Search' className="form-control" />
              <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />

              <h5>Contraseña</h5>
              <Field
                    name="password"
                    type="password"
                    placeholder='Ingrese una contraseña'
                    className="form-control me-2"
                  />
              <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />

              <h5>Contraseña</h5>

         {/*      <input
                className='form-control me-2'
                placeholder='Repita su contraseña'
                aria-label='Search'
              /> */}
              <Field
                    name="password2"
                    type="password"
                    placeholder='Repita su contraseña'
                    className="form-control me-2"
                  />
              <ErrorMessage
                    name="password2"
                    component="div"
                    className="alert alert-danger"
                  />
              <p className='card-text text-center'>
                Si ya esta registrado{" "}
                <Link
                  to='/Login'
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  {" "}
                  Inicie sesion aqui
                </Link>
              </p>
              <button  type='submit' className='btn btn-light'>
                Registrarme
              </button>
            </div>
             )}
  </Form>
        </Formik>
        {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </Container>
  );
};
