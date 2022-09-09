import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">  <footer className="py-3 my-4">
    <div className="row justify-content-center border-bottom pb-3 mb-3">
      <div className='col-auto'>
        <Link to="">Home</Link>
      </div>
      <div className='col-auto'>
        <Link to="Register">Contact</Link>
      </div>
      <div className='col-auto'>
        <Link to="Login">About</Link>
      </div>
    </div>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
</div>
  )
}

export default Footer