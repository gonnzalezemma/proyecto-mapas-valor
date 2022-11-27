import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
 const SeccionParcelas = ()=>{

    return(
    
        <>
    <h1>Seccion Parcelas</h1>



        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Crear Parcela</Card.Title>
        <Card.Text>
          Para poder gestionar tu parcela primero debe tener una en el sistema
        </Card.Text>
        <Button variant="primary"  as={Link} to='/CrearParcelaCampo' >Seccion Parcelas</Button>
      </Card.Body>
    </Card>


    
        </>
    )
    
    
    }

    export default  SeccionParcelas;