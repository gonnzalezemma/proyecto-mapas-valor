import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import { useMaps } from "../../context/MapContext";

export const NavNoLogged = () => {
  const { login, setLogin } = useMaps();
  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <div style={{padding:"0px 20px 20px 0px"}}>
          <Button
            as={Link}
            to='/login'
            onClick={() => setLogin(!login)}
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
