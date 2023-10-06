import React from 'react'
import "../Styles/styles.css"

const Card = ({name,description,released,platforms,background_image,genres,rating}) => {
  return (
    <div className='card-cont'>
      <div className='card-imagen'>
        <img src={background_image} alt="Game" />
      </div>
      <div className='card-cont-tittle'>
        <h2>{name}</h2>
      </div>
        <br />
      <div className='card-cont-info'>
        <label> Genres: </label>
        <span>{genres}</span>
      </div>

    </div>
  )
}

export default Card