import axios from 'axios';
import { GET_VIDEOGAME } from './action.type';



export function postVideoGame (state){
    return async function (dispatch){
        try {
            await axios.post('http://localhost:3001/videogames/',state)
            alert("!!TU VIDEO GAME FUE CREADO CON EXITO!!")
        } catch (error) {
            alert("!!Hubo un error al creat el VIDEO GAME!!")
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