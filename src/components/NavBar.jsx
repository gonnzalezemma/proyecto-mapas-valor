import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo.png';
import burgerButton from './burgerButton.png';

export default function NavBar() {

  const [mostrar, setMostrar] = useState(false);
  const [login, setLogin]=useState(false);
  const showNav=()=>{
    setMostrar(!mostrar)
}
const isLogin=()=>{
  setLogin(!login)
}
    return (
<>
  
  <nav className="navbar" style={{backgroundColor: "#024554"}}>
    <div className="container" style={{maxWidth:"1900px", height: "45px" }}>
      <a className="navbar-brand" href="#"  >
                <Link to="/" >
                <img src={Logo} alt="" width="60" height="50" />

                </Link>
     </a>

    <div >
  <div>

  <form className="d-flex" role="search" style={{marginBottom: "10px", Width:"350px"}}>

      <input style={{borderRadius: "1.200rem", height: "35px" }} className="form-control me-2" type="search" /> 
  <box-icon name='search-alt-2' style={{marginLeft: "-35px",
  marginBottom: "-12px",marginTop: "7px"}}></box-icon>
  </form>

  </div>
  </div>

  <button onClick={showNav} style={{backgroundColor: "transparent",border:"0",
  marginBottom: "10px"}}>
  {!login?(<>
  <div>

    <Link to="/Login" style={{TextAlign: "center", color:"white", textDecoration:"none", paddingRight: "10px"}}>Login</Link>
    <Link to="/Register" style={{TextAlign: "center", color:"white", textDecoration:"none", paddingLeft: "10px"}}>Register</Link>
  
  </div>
  </>)
  
  
  :(<>
    <img src={burgerButton} width="35" height="25"/>
  
  </>)

  }
  

  </button>
</div>


</nav>

{
!login?(
<>
</>
):(
  <>
 {

   mostrar?(
     
     <div className="card" style={{width: "18rem", backgroundColor: "#024554",border:0, borderRadius:"0 0 30px 30px",  float: "right",   display: "flex"}}>
     <div className="card-body" >
     <ul style={{listStyle: "none"}}>
     
     <li> <Link to="/Login" style={{TextAlign: "center", color:"white", textDecoration:"none"}}>Perfil</Link></li>
     
     <li>  <Link to="/Login" style={{TextAlign: "center", color:"white", textDecoration:"none"}}>Mapas Descargados</Link></li>
     <li>  <Link to="/Login" style={{TextAlign: "center", color:"white", textDecoration:"none"}}>Gestionar Ubicaciones</Link></li>
     
     <li>  <Link to="/Login" style={{TextAlign: "center", color:"white", textDecoration:"none"}}>cerrar Sesion</Link></li>
     
     </ul>
     
     
     
     </div>
     </div>
     ):(
       <></>
       )
      } 
      </>
    





  )
}



</>
    );
  }
//
