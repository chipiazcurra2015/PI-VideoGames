import React, { useState } from 'react'
import "../../Components/Styles/styles.css"

const Create = () => {

  const [state, setState] = useState(
    name= "",
    description = "",
    background_image = "",
    released = 0,
    platforms=[],
    genres= [],
    rating= 0.0,
  );
  const genres = ["Action", "Futbol","Aventura","Disparo","Pelea"]


  return (
    <div>
      <form className='form-cont'>
        <input type="text" name='name' placeholder='name'/>
        <input type="text" name='description' placeholder='desciption'/>
        <input type="text" name='background_image' placeholder='image'/>
        <input type="date" name='released' placeholder='released'/>
        <div>
          <label> Platforms: </label>
          <input type="text" name='platforms' />
          <button type='button'>Agregar </button>
        </div>
        <div>
          <label> Genres: </label>
          <select> 
          {
            genres.map(g=> <option key={g} value={g}>{g}</option>)
          }
          </select>
        </div>
        <div>
        <label> Rating: </label>
        <input type="number" name='rating' step='0.1' />
        </div>
          <input type="submit" />
      </form>
    </div>
  )
}

export default Create