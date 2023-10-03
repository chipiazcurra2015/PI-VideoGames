import React from 'react'
import Card from '../Card/Card'
import "../Styles/styles.css"

const Cards = ({info}) => {
  return (
    <div className='cards-cont'>
      {
       info.map(p=> <Card key={p.name} name={p.name} poder={p.poder} aliado={p.aliado}/>)
      }
    </div>
  )
}

export default Cards