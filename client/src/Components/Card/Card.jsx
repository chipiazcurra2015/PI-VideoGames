import React from 'react'
import "../Styles/styles.css"

const Card = ({name,poder,aliado}) => {
  return (
    <div className='card-cont'>
      <div className='card-cont-tittle'>
      <h2>{name}</h2>
      </div>
      <div className='card-cont-info'>
        <label>poder: </label>
        <span>{poder}</span>
        <br />
        <label>aliado: </label>
        <span>{aliado}</span>
      </div>

    </div>
  )
}

export default Card