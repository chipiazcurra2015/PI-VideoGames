import React from 'react'
import "../../Components/Styles/styles.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
   <div  className='landing-cont'>
    <div className='landing-cont-img'>
        <Link className = 'landing-links' to= "/home"><img className='img1' src="https://logodix.com/logo/380169.png" alt="logo" /></Link>
    </div>
        <h1 className='letras-landing'>BIENVENIDO A MI PROYECTO HENRY</h1>
        <h2 className='letras-landing-nombre'> Gabriel Azcurra</h2>
   </div> 
  )
}

export default Landing