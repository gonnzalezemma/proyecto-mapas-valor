import { Container, Navbar, Col, Row } from "react-bootstrap";
import { useMaps } from "../../context/MapContext";
import { NavLogged } from "./NavLogged";
import { NavNoLogged } from "./NavNoLogged";
import { Link } from "react-router-dom";
import CurrentWeather from "./currentWeather";

export default function NavBar() {
  const { login } = useMaps();

  return (
    <>
      <Navbar style={{ backgroundColor: "#024554", display:"flex", flexDirection:"row", justifyContent:"center", justifyItems:"center", padding:"20px 20px 0px 5px"}} variant="dark">
     <div>  
       <CurrentWeather /> 
     </div>
        {login ? <NavLogged /> : <NavNoLogged />}
      </Navbar>
    </>
  );
}
