import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <Container>
      <div className='row-lg-5 mt-5 d-flex justify-content-center'>
        <div className='col-md-5'>
          <div
            className='card text-bg-dark mb-3 p-0'
            style={{ maxWidth: "30rem" }}
          >
            <div className='card-body' style={{ backgroundColor: "#024554" }}>
              <h3 className='card-title text-center'>Registrar usuario</h3>
              <h5>Email</h5>
              <input
                className='form-control me-2'
                placeholder='ingrese su email'
                aria-label='Search'
              />
              <h5>Usuario</h5>
              <input
                className='form-control me-2'
                placeholder='ingrese un nombre de usuario'
                aria-label='Search'
              />

              <h5>Contraseña</h5>
              <input
                className='form-control me-2'
                placeholder='Ingrese su contraseña'
                aria-label='Search'
              />

              <h5>Contraseña</h5>

              <input
                className='form-control me-2'
                placeholder='Repita su contraseña'
                aria-label='Search'
              />
              <p className='card-text text-center'>
                Si ya esta registrado{" "}
                <Link
                  to='/Register'
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  {" "}
                  Inicie session aqui
                </Link>
              </p>
              <button type='button align-content-center' class='btn btn-light'>
                Registrarme
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
