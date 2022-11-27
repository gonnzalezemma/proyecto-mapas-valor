import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function GestionCampos() {
  
  
    return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Gestionar Parcelas</Card.Title>
        <Card.Text>
          Para poder gestionar tu parcela primero debe tener una en el sistema
        </Card.Text>
        <Button variant="primary"  as={Link} to='/gestion/seccion-parcelas' >Seccion Parcelas</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Tipos de Datos</Card.Title>
        <Card.Text>
          Indica los tipos de datos que va a recolectar de la parcela
        </Card.Text>
        <Button variant="primary"  as={Link} to='/gestion/seccion-tipodatos' >Seccion tipo de datos</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Registros de Datos</Card.Title>
        <Card.Text>
          El registro de datos permite guardar la informacion obtenida en una parcela
          en una fecha determinada.
        </Card.Text>
        <Button variant="primary"  as={Link} to='/gestion/seccion-registro' >Seccion Registros</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default GestionCampos