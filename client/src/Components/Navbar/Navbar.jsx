import React from 'react'
import "../Styles/styles.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        <Link className = 'navbar-links' to= "/"><img src="https://logodix.com/logo/380169.png" alt="logo" /></Link>
      </div>
      <div className='navbar-cont-links'>
        <Link className = 'navbar-links' to= "/home">Home</Link>
        <Link className = 'navbar-links' to= "/create">Formulario</Link>
      </div>
      <div className='navbar-cont-search'>
        <input type="text" name='' id='' placeholder='text' />
        <input type="submin" name='' id='' />
      </div>
    </div>
  )
}

export default Navbar