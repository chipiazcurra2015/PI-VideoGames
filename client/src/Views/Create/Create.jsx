import React, { useState } from 'react'
import "../../Components/Styles/styles.css"

const Create = () => {

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
  
  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    console.log(event.target.name);
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
  }

  const remove = (event) =>{
      setState({
        ...state,
        [event.target.name]:[...state[event.target.name].filter(x => x!== event.target.id )]
      })
  }
  return (
    <div>
      <form className='form-cont'>
        <input onChange={handleChange} type="text" name='name' placeholder='name'/>
        <input onChange={handleChange} type="text" name='description' placeholder='desciption'/>
        <input onChange={handleChange} type="text" name='background_image' placeholder='image'/>
        <input onChange={handleChange} type="date" name='released' placeholder='released'/>
        <div>
        <label>Rating: </label>
        <input type="number" onChange={handleChange} name='rating' step='0.1' />
        </div>
        <div>
          <label> Genres: </label>
          <select onChange={handleChange} name='genres'> 
          {
            genres.map(g=> <option key={g} value={g}>{g}</option>)
          }
          </select>
          {
             state.genres.map((p, index) => (<div key={index}><span id={"genres"}>{p}</span><button type='button' id={p} name='genres' onClick={remove}>X</button></div>))       
          }
        </div>
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
          <input type="submit" />
      </form>
    </div>
  )
}

export default Create