import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import "../../Components/Styles/styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGame } from '../../Redux/Action/action'

const Home = () => {

    const dispatch= useDispatch()
    const allVideoGame = useSelector(state => state.allVideoGame);

    useEffect(()=>{
      dispatch(getVideoGame())
    },[])
    
  return (
    <div className='home-cont'>
      <Cards info={allVideoGame}> </Cards>
    </div>

  )
}

export default Home