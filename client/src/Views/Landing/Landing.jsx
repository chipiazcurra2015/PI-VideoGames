import React from 'react'
import "../../Components/Styles/styles.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
   <div  className='landing-cont'>
    <div className='landing-cont-img'>
        <Link className = 'landing-links' to= "/home"><img src="https://logodix.com/logo/380169.png" alt="logo" /></Link>
    </div>
        <h1 className='letras-landing'>⚽BIENVENIDO⚽</h1>
   </div> 
  )
}

export default Landing