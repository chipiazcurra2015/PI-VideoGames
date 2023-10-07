import React, { useState } from 'react'
import "../../Components/Styles/styles.css"
import { postVideoGame, getAllGenres } from '../../Redux/Action/action';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';

const Create = () => {
  
  const allGenres = useSelector(state => state.allGenres);

  const dispatch = useDispatch();
  
  useEffect(() => {
  dispatch(getAllGenres())
  
  }, [])
     
  const [state, setState] = useState({
    name: "",
    description : "",
    background_image : "",
    released : 0,
    platforms: [],
    genres: [],
    rating: 0.0,
});

  const genres = ["Action","Futbol","Aventura","Disparo","Pelea"]
  const platforms = ["Xbox", "PC", "PlayStation", "Mac"]
  
  const [errors, setErrors] = useState({
    name: "Tienes que colocarle nombre a tu VideoGame.",
    description : "La descripción en este campo es requerida.",
    background_image : "La Imagen de tu juego es requerida.",
    released : "",
    platforms: "",
    genres: "",
    rating: "",
});

 const validate = (state, name) => {
  if (name === "name") {
    if (state.name === "")  setErrors({ ...errors, name: "Tienes que colocarle nombre a tu VideoGame." });
     else if(state.name.length >= 25) setErrors({ ...errors, name: "Nombre demasiado largo." });
     else if(!/^[a-zA-Z0-9\sñÑ.,]+$/.test(state.name)) setErrors({ ...errors, name: "El nombre no puede contener símbolos." });
     else setErrors({ ...errors, name: "" });
  }
    if(name === "description"){
      if (state.description === "")  setErrors({ ...errors, description: "La descripción en este campo es requerida." });
      else if(state.description.length >= 200) setErrors({ ...errors, description: "Descripción demasiada larga." });
      else if(!/^[a-zA-Z0-9\sñÑ.,]+$/.test(state.description)) setErrors({ ...errors, description: "La descripción no puede contener símbolos." });
      else setErrors({ ...errors, description: "" });
    }
    if(name === "background_image"){
      if (state.background_image === "")  setErrors({ ...errors, background_image: "La Imagen de tu juego es requerida." });
      else setErrors({ ...errors, background_image: "" });
    }
    if(name === "released"){

    }
    if(name === "rating"){
     if(state.rating >= 6) setErrors({ ...errors, rating: "El Rating debe ser menor a 5.9" });
      else setErrors({...errors, rating: ""})
    }
    if (name === "genres") {
      if (state.genres === "")  setErrors({ ...errors, genres: "Tienes que colocarle género a tu juego." });
    }
 }

  const handleChange = (event) => {
    event.preventDefault()
    if(event.target.name === "platforms" || event.target.name === "genres"){
      if(state.platforms.includes(event.target.value) || state.genres.includes(event.target.value)) return
       setState({
      ...state,
      [event.target.name]: [...state[event.target.name],event.target.value]
    })
    return
    }
    setState({
      ...state,
      [event.target.name]: event.target.value
    })


    
    //RE renderizado
    validate ({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name) 
  }



  const remove = (event) =>{
      setState({
        ...state,
        [event.target.name]:[...state[event.target.name].filter(x => x!== event.target.id )]
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(postVideoGame(state))
  }
  
  const buttonDisabled  = ()=> {
    let desabledAux = true;
    for(let error in errors){
        if(errors[error]==="") desabledAux = false;
        else {
          desabledAux = true;
          break;
        }
      }
      return desabledAux;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-cont'>
        <input onChange={handleChange} type="text" name='name' placeholder='Name'/>
        <span>{errors.name}</span>
        <input onChange={handleChange} type="text" name='description' placeholder='Desciption'/>
        <span>{errors.description}</span>
        <div>
        <label> Released: </label>
        <input onChange={handleChange} type="date" name='released' placeholder='Released' />
        </div>
        <div>
        <label>Rating: </label>
        <input type="number" onChange={handleChange} name='rating' step='0.1' placeholder = 'Rating' />
        <span>{errors.rating}</span>
        </div>
        <div>
          <label> Genres: </label>
          <select onChange={handleChange} name='genres'>
          {
            allGenres.map(g=> <option key={g} value={g}>{g}</option>)
          }
          </select>
          {
             state.genres.map((p, index) => (<div key={index}><span id={"genres"}>{p}</span><button type='button' id={p} name='genres' onClick={remove}>X</button></div>))       
            }
        </div> <span>{errors.genres}</span>
        <div>
          <label> Platforms: </label>
          <select onChange={handleChange} name='platforms'> 
          {
           platforms.map(p=> <option key={p} value={p}>{p}</option>)
          }
          </select>
          {
            state.platforms.map((p, index) => (<div key={index}> <span id={"platforms"}>{p}</span> <button type='button' id={p} name='platforms' onClick={remove}>X</button></div>))       
          }
        </div>
        <div>
         <label> Image: </label>
         <input onChange={handleChange} type="text" name='background_image' placeholder='Image'/>
         <span>{errors.background_image}</span>
        </div>
        <input disabled={buttonDisabled()} type="submit" value="Crear Video Game" />
      </form>
    </div>
  )
};

export default Create