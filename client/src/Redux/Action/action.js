import axios from 'axios';
import { GET_VIDEOGAME, GET_GENRES,GET_PLATFORMS,PAGINATE,FILTERS
    , GET_ID, RESET,FILTER_BY_GENRES,SEARCH_BY_NAME} from './action.type';



export function postVideoGame (state){
    return async function (dispatch){
        try {
            await axios.post('http://localhost:3001/videogames/',state)
            alert("🎮🎮!!TU VIDEO GAME FUE CREADO CON ÉXITO!!🕹🕹")
        } catch (error) {
            alert("!!Hubo un error al crear el VIDEO GAME!!😢")
            console.log(error);
        }
    }
}

export function getVideoGame (){
    return async function (dispatch){
        try {
           const response =  await axios.get('http://localhost:3001/videogames/')
           dispatch({
                type:GET_VIDEOGAME,
                payload: response.data
           })
        } catch (error) {
        }
    }
}

export function getAllGenres (){
    return async function (dispatch){
        try {
           const response =  await axios.get('http://localhost:3001/genres/')
           dispatch({
                type:GET_GENRES,
                payload: response.data
           })
        } catch (error) {
        }
    }
}

export function getPlatforms (){
    return async function (dispatch){
        try {
           const response =  await axios.get('http://localhost:3001/videogames/')
           dispatch({
                type:GET_PLATFORMS,
                payload: response.data
           })
        } catch (error) {
        }
    }
}
export function page (order){
    return function (dispatch){
           dispatch({
                type:PAGINATE,
                payload:order
           })
        }
    }
export function VideoGameFilters (order){
    return function (dispatch){
           dispatch({
                type:FILTERS,
                payload:order
           })
        }
    }

    export function getVideoID(id) {
        return async function (dispatch) {
          try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);
            dispatch({
              type: GET_ID,
              payload: response.data
            });
          } catch (error) {
            console.error(error);
          }
        };
      }

      export function resetVideo (order){
        return function (dispatch){
               dispatch({
                    type:RESET,
                    payload:order
               })
            }
        }

        export function filterByGenres (order){
            return async function (dispatch){
                try {
                   dispatch({
                        type:FILTER_BY_GENRES,
                        payload: order
                   })
                } catch (error) {
                    console.log(error);
                }
            }
        }

        
        export function searchByName (searchTerm){
            return async function (dispatch){
               dispatch({
                       type: SEARCH_BY_NAME,
                        payload: searchTerm,
                      })
  }
}