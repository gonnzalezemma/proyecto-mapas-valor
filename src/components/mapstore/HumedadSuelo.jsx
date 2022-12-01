import React from 'react'
import { Container, Navbar,Nav, Col, Row } from "react-bootstrap";
import Mapstore from "../../pages/Mapstore"

export function HumedadSuelo() {

  return (
    <>

<iframe allowFullScreen style={{border: "none", display:"inline-table", height:"85vh", width:"100%"}} src="http://localhost:8082/mapstore/#/context/humedaddelsuelo"></iframe>

    </>
  )
}

