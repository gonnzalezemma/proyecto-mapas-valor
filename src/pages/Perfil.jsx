import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Perfil = () => {
  return (
    <Container>
      <Button as={Link} to='/profile-form' variant='success'>
        Completar perfil
      </Button>
    </Container>
  );
};
