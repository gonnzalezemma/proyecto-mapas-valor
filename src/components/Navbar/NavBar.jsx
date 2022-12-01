import { Container, Navbar, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";
import { useMaps } from "../../context/MapContext";
import { NavLogged } from "./NavLogged";
import { NavNoLogged } from "./NavNoLogged";
import { Link } from "react-router-dom";
import CurrentWeather from "./currentWeather";
import Logo from "../assets/Logo.png";

export default function NavBar() {
  const { token } = useMaps();
  console.log(token);
  const [style, setStyle] = useState({});

  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  //const [tamanio,setTamanio] = useState(window.screen.width);

  useEffect(() => {
    const tamanio = window.innerWidth;
    console.log(tamanio);

    if (tamanio < 800) {
      setStyle({
        paddingLeft: "50px",
        paddingTop: "-5px",
        marginTop: "-2px",
      });
    } else {
      setStyle({
        paddingLeft: "550px",
        paddingTop: "-50px",
        marginTop: "-62px",
      });
    }
  }, [window.innerWidth]);

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
