import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import {getVideoID} from "../../Redux/Action/action"
import { Link } from 'react-router-dom';

const Detail = () => {
  const dispatch= useDispatch();
  const params = useParams();
  const allVideoID = useSelector(state => state.allVideoID);
  useEffect(() => {
    dispatch(getVideoID(params.id))
      return () => {

      }
  },[]);
  return (
    <div className='detail-cont'>
      <div className='detail-content'>
        <div className='detail-image'>
          <img className='detail-img' src={allVideoID.background_image} alt='image' />
        </div>
        <div className='detail-specs'>
          <h1>🎮{allVideoID.name}🎮</h1>
          <hr />
          <label>Description: </label>
          {allVideoID.description}
          <hr />
          <label>Released:</label>
          <p>{allVideoID.released}</p>
          <hr />
          <label>Genres: </label>
          <p>㊗{allVideoID.genres}</p>
          <hr />
          <label>Platforms: </label>
          <p>{allVideoID.platforms}</p>
          <hr />
          <label>Rating: </label>
          <p>⭐{allVideoID.rating}⭐</p>
        <Link className = 'detail-links-volver' to= "/home">VOLVER</Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Detail;