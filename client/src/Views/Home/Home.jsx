import React from 'react'
import Cards from '../../Components/Cards/Cards'
import "../../Components/Styles/styles.css"

const Home = () => {

  const arr = [{name:"Lucas",poder:"codear css", aliado:"tu hermana"},
  {name:"Lionel",poder:"codear java", aliado:"batman"},
  {name:"Julian",poder:"codear C++", aliado:"robin"},
  {name:"Majo",poder:"codear javaScript", aliado:"judas"},
  {name:"Alma",poder:"irme de joda", aliado:"hombre araña"}]

  return (
    <div className='home-cont'>
      <Cards info={arr}> </Cards>
    </div>
  )
}

export default Home