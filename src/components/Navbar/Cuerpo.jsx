import React from "react";
// import Logo from "../assets/Logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cuerpo = ({ weather }) => {
  return (
    <div>
      <Container>
        <div
          style={{ display: "flex", width: "50px", height: "50px" }}
          className='text-white'
        >
          <div style={{ marginTop: "-8px" }}>
            <img src={weather?.current.condition.icon} />
          </div>

          <Row xs={2} md={2}>
            <Col>
              <p> {weather?.current.temp_c + "C°"} </p>
            </Col>

            <Col style={{ marginLeft: "-40px", marginTop: "20px" }}>
              <p>{weather?.location.name}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
