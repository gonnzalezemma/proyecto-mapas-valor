import React from 'react'
import { Container, Navbar,Nav, Col, Row,Card, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageMapValor from "../components/mapstore/images/terminado-mapa-valor.png"
import imagePrecio from "../components/mapstore/images/precios-terminado.png"
function Mapstore() {

  return (
    <>

<br />
      <Card  as={Link} to='/maps/humedad' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imageMapValor} style={{ textDecoration:"none"}} />
      <Card.Body>
        <Card.Title>Humedad Suelo</Card.Title>
        <Card.Text style={{ color: "black", textDecoration:"none"}}>
      <p style={{ color: "black", textDecoration:"none"}}>

       Humedad del suelo de la capital de Formosa
      </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  as={Link} to='/maps/precio-campos' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imagePrecio} style={{ textDecoration:"none"}} />
      <Card.Body>
        <Card.Title>Precio promedio de hectareas</Card.Title>
        <Card.Text style={{ color: "black", textDecoration:"none"}}>
      <p style={{ color: "black", textDecoration:"none"}}>
        Precio Promedios Hectareas
      </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  as={Link} to='/maps/departametos-temperatura-tierra' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imageMapValor} style={{ textDecoration:"none"}} />
      <Card.Body>
        <Card.Title>Temperatura Tierra Formosa</Card.Title>
        <Card.Text style={{ color: "black", textDecoration:"none"}}>
      <p style={{ color: "black", textDecoration:"none"}}>

       Humedad del suelo de la capital de Formosa
      </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  as={Link} to='/maps/humedad' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imageMapValor} style={{ textDecoration:"none"}} />
      <Card.Body>
        <Card.Title>Humedad Suelo</Card.Title>
        <Card.Text style={{ color: "black", textDecoration:"none"}}>
      <p style={{ color: "black", textDecoration:"none"}}>

       Humedad del suelo de la capital de Formosa
      </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  as={Link} to='/maps/humedad' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imageMapValor} style={{ textDecoration:"none"}} />
      <Card.Body>
        <Card.Title>Humedad Suelo</Card.Title>
        <Card.Text style={{ color: "black", textDecoration:"none"}}>
      <p style={{ color: "black", textDecoration:"none"}}>

       Humedad del suelo de la capital de Formosa
      </p>
        </Card.Text>
      </Card.Body>
    </Card>






    </>
  )
}

export default Mapstore