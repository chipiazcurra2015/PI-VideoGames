import React from 'react'
import "../Styles/styles.css"
import {Link} from "react-router-dom"

const Card = ({name,description,released,platforms,background_image,genres,rating,id}) => {
  return (
    <div className='card-cont'>
      <div className='card-imagen'>
        <img src={background_image} alt="Game" />
      </div>
      <div className='card-cont-tittle'>
        <Link to={`/detail/${id}`} ><h2 className='name'>{name}</h2></Link>
      </div>
        <br />
      <div className='card-cont-info'>
        <label> Genres: </label>
        <span>{genres}</span>
      </div>
      <div>
        <label> Rating: </label>
        <span>⭐{rating}⭐</span>
      </div>
    </div>
  )
}

export default Card