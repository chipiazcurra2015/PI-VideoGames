import { GET_VIDEOGAME, GET_GENRES,GET_PLATFORMS, PAGINATE,FILTERS,GET_ID,
     RESET, FILTER_BY_GENRES, SEARCH_BY_NAME} from "../Action/action.type";


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
    currentPageNumber: 1,
    searchTerm: '',
    filterType: 'all'
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
                    allGenres: action.payload,
                    allVideoGameBackUp: action.payload
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
                case SEARCH_BY_NAME:
                    const searchTerm = action.payload.toLowerCase();
                    const filteredByName = state.allVideoGameBackUp.filter((game) => game.name.toLowerCase().includes(searchTerm));
                    return {
                      ...state,
                      allVideoGame: [...filteredByName].splice(0, 15),
                      currentPage: 0,
                      filter: true,
                      videoFiltered: filteredByName,
                      searchTerm,
                      currentPageNumber: 1,
                    }
            case RESET: 
            return{
                ...state,
                allVideoGame:[...state.allVideoGameBackUp].splice(0,15),
                currentPage:0,
                filter: false,
                videoFiltered: [],
                videoFiltered5: [],
                currentPageNumber: 1,

            }
                case PAGINATE:
                    const next_page = state.currentPage + 1;
                    const prev_page = state.currentPage - 1;
                    const FirstIndex = action.payload === "next" ? next_page * 15 : prev_page * 15;
                
                    if (state.filter) {
                        if (action.payload === "next" && FirstIndex >= state.videoFiltered.length) return state;
                        else if (action.payload === "prev" && prev_page < 0) return state;
                        return {
                            ...state,
                            allVideoGame: [...state.videoFiltered].splice(FirstIndex, 15),
                            currentPage: action.payload === "next" ? next_page : prev_page,
                            currentPageNumber: action.payload === "next" ? state.currentPageNumber + 1 : state.currentPageNumber - 1
                        };
                    }
                
                    if (action.payload === "next" && FirstIndex >= state.allVideoGameBackUp.length) return state;
                    else if (action.payload === "prev" && prev_page < 0) return state;
                
                    return {
                        ...state,
                        allVideoGame: [...state.allVideoGameBackUp].splice(FirstIndex, 15),
                        currentPage: action.payload === "next" ? next_page : prev_page,
                        currentPageNumber: action.payload === "next" ? state.currentPageNumber + 1 : state.currentPageNumber - 1
                    };
            case FILTER_BY_GENRES:
                 return {
                      ...state,
                      allVideoGame:[...state.allVideoGameBackUp].filter(g=> g.genres.includes(action.payload)).splice(0,15),
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
                        currentPage: 0,
                        currentPageNumber: 1,
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
                        currentPage: 0,
                        currentPageNumber: 1,
                    } 
             
                case "Rating":
                    let rating = [...state.allVideoGameBackUp].sort((prev,next)=>{
                        if(prev.rating > next.rating) return -1 
                        if(prev.rating < next.rating) return  1
                        return 0 
                    })

                    return{
                        ...state,
                        allVideoGame:[...rating].splice(0,15),
                        videoFiltered: rating,
                        currentPage: 0,
                        filter: true,
                        currentPageNumber: 1,
                    } 
                case "Rating5":
                    let rating5 = [...state.allVideoGameBackUp].sort((prev,next)=>{
                        if(prev.rating > next.rating) return   1 
                        if(prev.rating < next.rating) return  -1
                        return 0 
                    })
                    return{
                        ...state,
                        allVideoGame:[...rating5].splice(0,15),
                        videoFiltered5: rating5,
                        currentPage: 0,
                        filter: true,
                        currentPageNumber: 1,
                    } 

                        
                    default: return state
                break;
               }
            
            default: return state 
        }
    }
export default rootReducer 