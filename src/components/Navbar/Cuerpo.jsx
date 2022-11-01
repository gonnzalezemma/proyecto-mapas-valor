import React from "react";
import Logo from "../assets/Logo.png";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cuerpo = ({ weather }) => {
  return (
    <div>
      <Container>
        <div style={{ display: "flex" }} className="text-white">
          <Row>
            <Col sm={4}>
              <img src={Logo} width={60} height={50} alt="logo" />
            </Col>
            <Col sm={4}>
              <img src={weather?.current.condition.icon} />
              <p>{weather?.location.name}</p>
            </Col>
            <Col sm={4}>
              <p>temperatura: {weather?.current.temp_c} C°</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
