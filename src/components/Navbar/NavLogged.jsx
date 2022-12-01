import React from "react";
import { Button, Form, InputGroup, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMaps } from "../../context/MapContext";
import { FaSearch } from "react-icons/fa";

export const NavLogged = () => {
  const { login, setLogin } = useMaps();

  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
      <div style={{padding:"0px 20px 20px 0px", display:"flex", flexDirection:"row", justifyContent:"center", justifyItems:"center"} }>
        <Form className='d-flex' style={{padding:"0px 10px 0px 0px"}}>
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
           Mapas
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/gestion'>
            Gestionar parcela
          </NavDropdown.Item>
          <NavDropdown.Item href='/news'>
            Noticias
          </NavDropdown.Item>
          <NavDropdown.Divider color='white' />
          <NavDropdown.Item as={Link} to='/' onClick={() => setLogin(!login)}>
            Cerrar sesion
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      </Navbar.Collapse>
    </>
  );
};
