import React from "react";
import { Button, Form, InputGroup, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMaps } from "../../context/MapContext";
import { FaSearch } from "react-icons/fa";

export const NavLogged = () => {
  const { login, setLogin, Logout } = useMaps();

  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Form className='d-flex'>
        <InputGroup>
          <Form.Control
            type='search'
            placeholder='Search'
            // className='me-2'
            aria-label='Search'
          />
          <Button variant='success'>
            <FaSearch className='mb-1' />
          </Button>
        </InputGroup>
      </Form>
      <NavDropdown
        menuVariant='dark'
        align='end'
        title='Más'
        className='text-white'
      >
        <NavDropdown.Item as={Link} to='/perfil'>
          Perfil
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/maps'>
          Mapas descargados
        </NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>
          Gestionar Ubicaciones
        </NavDropdown.Item>
        <NavDropdown.Divider color='white' />
        <NavDropdown.Item as={Link} to='/' onClick={() => Logout()}>
          Cerrar sesion
        </NavDropdown.Item>
        {/* <NavDropdown.Item as={Link} to='/' onClick={() => setLogin(!login)}>
          Cerrar sesion
        </NavDropdown.Item> */}
      </NavDropdown>
    </>
  );
};
