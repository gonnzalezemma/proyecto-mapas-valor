import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";

export const NavNoLogged = () => {
  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <div style={{padding:"0px 20px 20px 0px"}}>
          <Button
            as={Link}
            to='/login'
              className='mx-2'
            variant='success'
          >
            Iniciar Sesion
          </Button>
          <Button as={Link} to='/register'>
            Registrarse
          </Button>
        </div>
      </Navbar.Collapse>
    </>
  );
};
