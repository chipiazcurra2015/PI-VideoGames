import React from 'react'
import "../Styles/styles.css"
import { Link } from 'react-router-dom'
import searchBar from '../SearchBar/SearchBar'
import { dispatch } from 'react'
import { searchByName } from '../../Redux/Action/action'
import { useSelector,useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        <Link className = 'navbar-links' to= "/"><img src="https://logodix.com/logo/380169.png" alt="logo" /></Link>
      </div>
      <div className='navbar-cont-links'>
        <Link className = 'navbar-links' to= "/home">Home</Link>
        <Link className = 'navbar-links' to= "/create">Formulario</Link>
      </div>
      <div className='navbar-cont-search'>
      <input type="text" placeholder="Buscar por nombre" value={searchTerm} onChange={(e) => dispatch(searchByName(e.target.value))}/>
      <button onClick={() => dispatch(searchByName(searchTerm))}>Buscar</button>
      </div>
    </div>
  )
}

export default Navbar