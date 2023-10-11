import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import "../../Components/Styles/styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGame, page, VideoGameFilters } from '../../Redux/Action/action'

const Home = () => {

    const dispatch= useDispatch()
    const allVideoGame = useSelector(state => state.allVideoGame);

    useEffect(()=>{
      dispatch(getVideoGame())
    },[])

    const pagination = (e) => {
        dispatch(page(e.target.name))
    }
    const filters = (e) => {
        dispatch(VideoGameFilters(e.target.name))
    }
    


  return (
    <div className='home-cont'>
        <div>
          <label>Filtros</label>
          <button name='AZ' onClick={filters}>A-Z</button>
         <button name='ZA' onClick={filters}>Z-A</button>
         <button name='Rating' onClick={filters}>{"Rating menor a 4"}</button>
         <button name='Rating5' onClick={filters}>{"Rating mayor a 4"}</button>
        </div>      

       <div>
         <label> Paginado</label>
         <button name='prev' onClick={pagination}>PREV</button>
         <button name='next' onClick={pagination}>NEXT</button>
       </div>
       <div>
         <Cards info={allVideoGame}> </Cards>
       </div>
    </div>
  )
}

export default Home