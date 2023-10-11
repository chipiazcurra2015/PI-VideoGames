import { GET_VIDEOGAME, GET_GENRES,GET_PLATFORMS, PAGINATE,FILTERS,GET_ID} from "../Action/action.type";


let initialState = {
    allVideoGame : [],
    allGenres: [],
    allVideoID: {},
    allplatfomrs: [],
    videoFiltered: [],
    videoFiltered5: [],
    filter: false,
    allVideoGameBackUp: [],
    currentPage: 0,
}


function rootReducer (state= initialState , action){
    switch (action.type) {
        case GET_VIDEOGAME:
                return {
                    ...state,
                    allVideoGame: [...action.payload].splice(0,15),
                    allVideoGameBackUp: action.payload
                }
            case GET_GENRES:
                return {
                    ...state,
                    allGenres: action.payload
                }
                case GET_ID:
                    return {
                        ...state,
                        allVideoID: action.payload
                    }
            case GET_PLATFORMS:
                return {
                    ...state,
                    allplatfomrs: action.payload
                }
            case PAGINATE:
                const next_page = state.currentPage  + 1;
                const prev_page = state.currentPage  - 1;
                const FirstIndex = action.payload === "next"? next_page * 15 : prev_page * 15 ;
                


                if(state.filter){        
                if(action.payload === "next" && FirstIndex >= state.videoFiltered.length) return state;
                else if (action.payload === "prev" && prev_page < 0) return state
                if(action.payload === "next" && FirstIndex >= state.videoFiltered5.length) return state;
                else if (action.payload === "prev" && prev_page < 0) return state
                    return {
                        ...state,
                        allVideoGame: [...state.videoFiltered].splice(FirstIndex, 15),
                        currentPage: action.payload === "next"? next_page :prev_page
                    }
                }
                
                if(action.payload === "next" && FirstIndex >= state.allVideoGameBackUp.length) return state;
                else if (action.payload === "prev" && prev_page < 0) return state

              return {
                ...state,
                allVideoGame: [...state.allVideoGameBackUp].splice(FirstIndex, 15),
                currentPage: action.payload === "next"? next_page :prev_page
            }


            case FILTERS:
               switch (action.payload) {
                case "AZ" :
                    let ase = [...state.allVideoGameBackUp].sort((prev,next)=>{
                        if(prev.name.toLowerCase()>next.name.toLowerCase()) return 1 
                        if(prev.name.toLowerCase()<next.name.toLowerCase()) return -1
                        return 0 
                    })
                    return{
                        ...state,
                        allVideoGame:[...ase].splice(0,15),
                        allVideoGameBackUp: ase,
                        currentPage: 0
                    } 

                case "ZA" :
                    let des = [...state.allVideoGameBackUp].sort((prev,next)=>{
                        if(prev.name.toLowerCase()>next.name.toLowerCase()) return -1 
                        if(prev.name.toLowerCase()<next.name.toLowerCase()) return  1
                        return 0 
                    })
                    return{
                        ...state,
                        allVideoGame:[...des].splice(0,15),
                        allVideoGameBackUp: des,
                        currentPage: 0
                    } 
             
                case "Rating":
                    let rating = [...state.allVideoGameBackUp].filter((v)=> v.rating < 4)
                    return{
                        ...state,
                        allVideoGame:[...rating].splice(0,15),
                        videoFiltered: rating,
                        currentPage: 0,
                        filter: true
                    } 
                case "Rating5":
                    let rating5 = [...state.allVideoGameBackUp].filter((v)=> v.rating > 4)
                    return{
                        ...state,
                        allVideoGame:[...rating5].splice(0,15),
                        videoFiltered5: rating5,
                        currentPage: 0,
                        filter: true
                    } 
                        
                    default: return state
                break;
               }
            
            default: return state 
        }
    }
export default rootReducer 