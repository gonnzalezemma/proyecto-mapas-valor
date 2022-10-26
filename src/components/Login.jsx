import React from "react";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  return (
    <div className='container'>
      <div className='row-lg-5 mt-5 d-flex justify-content-start '>
        <div className='col-md-5 '>
          <form>
            <div
              className='card text-white'
              style={{ backgroundColor: "#024554", maxWidth: "30rem" }}
            >
              <div className='card-header border-white text-center'>
                <h3 className='card-title text-center'>Registrar usuario</h3>
              </div>
              <div className='card-body'>
                <div className='mb-3'>
                  <h5 className='text-start'>Usuario</h5>
                  <input
                    className='form-control'
                    placeholder='ingrese un nombre de usuario'
                  />
                </div>

                <div className='mb-3'>
                  <h5 className='text-start'>Contraseña</h5>
                  <input
                    className='form-control'
                    placeholder='Ingrese su contraseña'
                  />
                </div>

                <p className='card-text text-center'>
                  Si no esta registrado{" "}
                  <Link to='/Register' style={{ color: "black" }}>
                    {" "}
                    Registrese aqui asdfxzvzxvzxcvzxcvzxvzcvxv
                  </Link>
                </p>
              </div>
              <div className='card-footer text-end border-white'>
                <Link to='/'>
                  <button type='button' class='btn btn-light'>
                    {" "}
                    iniciar sesion
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
