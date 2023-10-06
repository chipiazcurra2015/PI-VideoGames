import { GET_VIDEOGAME } from "../Action/action.type";


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
                break;
        
            default: return state 
                break;
        }
}
export default rootReducer 