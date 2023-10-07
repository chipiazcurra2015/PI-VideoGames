import { GET_VIDEOGAME, GET_GENRES } from "../Action/action.type";


let initalState = {
    allVideoGame : [],
    allGenres: [],
}


function rootReducer (state= initalState , action){
        switch (action.type) {
            case GET_VIDEOGAME:
                return {
                    ...state,
                    allVideoGame: action.payload
                }
            case GET_GENRES:
                return {
                    ...state,
                    allGenres: action.payload
                }
                break;
        
            default: return state 
                break;
        }
}
export default rootReducer 