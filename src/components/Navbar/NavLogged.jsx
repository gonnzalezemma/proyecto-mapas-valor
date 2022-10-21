import React from "react";
import { Button, Form, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMaps } from "../../context/MapContext";

export const NavLogged = () => {
  const { login, setLogin } = useMaps();

  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Form className='d-flex'>
        <Form.Control
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label='Search'
        />
        <Button variant='success'>Search</Button>
      </Form>
      <NavDropdown
        menuVariant='dark'
        align='end'
        title='Más'
        className='text-white'
      >
        <NavDropdown.Item href='#action/3.1'>Perfil</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>
          Mapas descargados
        </NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>
          Gestionar Ubicaciones
        </NavDropdown.Item>
        <NavDropdown.Divider color='white' />
        <NavDropdown.Item
          as={Link}
          to='/login'
          onClick={() => setLogin(!login)}
        >
          Cerrar sesion
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
