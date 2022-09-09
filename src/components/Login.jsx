import React from 'react';
import {Link} from 'react-router-dom'


export default function LoginComponent() {
    return (
      <>
      <br />
 <div className="row justify-content-center align-items-center" >
   <div className="col-auto card text-bg-dark p-0 text-center mb-5 " style={{maxWidth: "30rem"}}>
   
   <div className="card-body" style={{backgroundColor:"#024554"}}>
     <h3 className="card-title text-center" >Registrar usuario</h3>
   
     <h5>Usuario</h5>
     <input className="form-control me-2" placeholder="ingrese un nombre de usuario" aria-label="Search"/>
   
     <h5>Contraseña</h5>
     <input className="form-control me-2" placeholder="Ingrese su contraseña" aria-label="Search"/>
   
     <p className="card-text text-center">Si no esta registrado <Link to="/Login" style={{color:'black', textDecoration:"underline"}}> Registrese aqui</Link>
   
     </p>
     <button type="button align-content-center" class="btn btn-light">Iniciar Sesion</button>
   </div>
   </div>
 </div>
      </>

    );
  }
  