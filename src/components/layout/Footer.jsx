import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=''>
      {" "}
      <footer className='py-4 bg-dark'>
        <div className='row justify-content-center border-bottom'>
          <div className='col-auto'>
            <Link to=''>Home</Link>
          </div>
          <div className='col-auto'>
            <Link to='Register'>Registro</Link>
          </div>
          <div className='col-auto'>
            <Link to='Login'>Login</Link>
          </div>
          <div className='col-auto'>
            <Link to='News'>News</Link>
          </div>
        </div>
        <p className='text-center text-muted'>&copy; 2022 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
