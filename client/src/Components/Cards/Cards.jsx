import React from 'react'
import Card from '../Card/Card'
import "../Styles/styles.css"

const Cards = ({info}) => {
  return (
    <div className='cards-cont'>
      {
       info.map(p=> <Card key={p.name} name={p.name} 
        description={p.description} background_image={p.background_image} 
        genres={p.genres} released={p.released} rating={p.rating} platforms={p.platforms}/>)
      }
    </div>
  )
}

export default Cards