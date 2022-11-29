import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageGestion from './gestionImage/gestionparcela.png'
import imageTipoDato from './gestionImage/tipodato.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
function GestionCampos() {
  
  
    return (
    <>
<br />
<Row xs={1} xl={3} md={2} className="g-4"> 


<Col> 
<Card style={{ width: '20rem', height: "32em"}}>
      <Card.Img variant="top" src={imageGestion} />
      <Card.Body>
        
        <Card.Title>Gestionar Parcelas</Card.Title>
        <br/>

        <Card.Text>
          Para poder gestionar tu parcela primero debe tener una en el sistema
        </Card.Text>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    
        <Button variant="primary"  as={Link} to='/gestion/seccion-parcelas' >Seccion Parcelas</Button>
      </Card.Body>
    </Card>


</Col>
<Col> 


<Card style={{ width: '20rem', height: "32em" }}>
      <Card.Img variant="top" src={imageTipoDato} />
      <Card.Body>
        <br/>
        <br/>
        <Card.Title>Tipos de Datos</Card.Title>

        <Card.Text>
          Indica los tipos de datos que va a recolectar de la parcela
        </Card.Text>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button variant="primary"  as={Link} to='/gestion/seccion-tipodatos' >Seccion tipo de datos</Button>
      </Card.Body>
    </Card>

</Col>
<Col> 

<Card style={{  width: '20rem', height: "32em" }}>
      <Card.Img variant="top" src="https://descargar.info/wp-content/uploads/2013/09/Registro-Documental.jpg" style={{ height:"20em"}} />
      <Card.Body>
        <Card.Title>Registros de Datos</Card.Title>
        <Card.Text>
          El registro de datos permite guardar la informacion obtenida en una parcela
          en una fecha determinada.
        </Card.Text>
        <Button variant="primary"  as={Link} to='/gestion/seccion-registro' >Seccion Registros</Button>
      </Card.Body>
    </Card>


</Col>
   






  

</Row>
    </>
  )
}

export default GestionCampos