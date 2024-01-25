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
    <link rel="stylesheet" href="styles.css" />

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


    {console.log();}
  return (
    <div className='home-cont'>
      <div>
        <button name='reset' onClick={reset}>REFRESH SEARCH</button>
      </div>
        <div className='home-filtros'>
          <label>Filtros</label>
          <button name='AZ' onClick={filters}>A-Z</button>
         <button name='ZA' onClick={filters}>Z-A</button>
         <button name='Rating' onClick={filters}>{"Rating-max"}</button>
         <button name='Rating5' onClick={filters}>{"Rating-min"}</button>
         <button name='API' onClick={filters}>{"API"}</button>
         <button name='DataBase' onClick={filters}>{"DataBase"}</button>
         <button name='all' onClick={filters}>{"All"}</button>
        <label >Select a Genre: </label>
          <select  className='home-genre' onClick={filtered} name="filter" id="">
            {
               allGenres.map(g=> <option key={g} value={g}>{g}</option>)   
             }
          </select>
        </div>      

        <div className='home-pagination-container'>
        <button name='prev' onClick={pagination}>⏪⏪</button>
        <div className='page-number-container'>
            <p className='page-number'>{currentPageNumber}</p>
        </div>
        <button name='next' onClick={pagination}>⏩⏩</button>
        </div>
   
       <div>
         <Cards info={allVideoGame}> </Cards>
       </div>
        <div className='home-pagination-container'>
        <button name='prev' onClick={pagination}>⏪⏪</button>
        <div className='page-number-container'>
            <p className='page-number'>{currentPageNumber}</p>
        </div>
        <button name='next' onClick={pagination}>⏩⏩</button>
        </div>
    </div>
  )
}
);
export default Home