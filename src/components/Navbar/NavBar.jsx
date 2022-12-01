import { Container, Navbar } from "react-bootstrap";
import { useMaps } from "../../context/MapContext";
import { NavLogged } from "./NavLogged";
import { NavNoLogged } from "./NavNoLogged";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { token } = useMaps();
console.log(token);
  return (
    <Navbar style={{ backgroundColor: "#024554" }} variant='dark' expand='lg'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={Logo} width='70' alt='logo' />
          </Navbar.Brand>
        </Link>
        {token ? <NavLogged /> : <NavNoLogged />}
      </Container>
    </Navbar>
  );
}
