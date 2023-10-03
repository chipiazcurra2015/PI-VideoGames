import React from 'react'
import "../../Components/Styles/styles.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing-cont'>
      <Link to="/home">HOME</Link>
    </div>
  )
}

export default Landing