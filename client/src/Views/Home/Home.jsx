import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import "../../Components/Styles/styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGame, page, VideoGameFilters, resetVideo, getAllGenres,filterByGenres } from '../../Redux/Action/action'

const Home = React.memo(() => {

    const dispatch= useDispatch()
    const allVideoGame = useSelector(state => state.allVideoGame);
    const allGenres = useSelector(state => state.allGenres);
    const currentPageNumber = useSelector(state => state.currentPageNumber);
    
    useEffect(()=>{
      dispatch(getVideoGame())
    },[])
    useEffect(() => {
      dispatch(getAllGenres())
      }, [])

    const pagination = (e) => {
        dispatch(page(e.target.name))
    }
    const filters = (e) => {
        dispatch(VideoGameFilters(e.target.name))
    }
    const reset = (e) => {
       dispatch(resetVideo(e.target.name))
    }
    const filtered = (event) => {
       dispatch(filterByGenres(event.target.value))
    }


  return (
    <div className='home-cont'>
      <div>
        <button name='reset' onClick={reset}>REFRESH SEARCH</button>
      </div>
        <div>
          <label>Filtros</label>
          <button name='AZ' onClick={filters}>A-Z</button>
         <button name='ZA' onClick={filters}>Z-A</button>
         <button name='Rating' onClick={filters}>{"Rating menor a 4"}</button>
         <button name='Rating5' onClick={filters}>{"Rating mayor a 4"}</button>
        </div>      

        <div className='home-pagination-container'>
        <label>Paginado</label>
        <button name='prev' onClick={pagination}>PREV</button>
        <p>{currentPageNumber}</p>
        <button name='next' onClick={pagination}>NEXT</button>
          <select onClick={filtered} name="filter" id="">
            {
               allGenres.map(g=> <option key={g} value={g}>{g}</option>)   
             }
          </select>
        </div>
   
       <div>
         <Cards info={allVideoGame}> </Cards>
       </div>
    </div>
  )
}
);
export default Home