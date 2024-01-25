import { GET_VIDEOGAME, GET_GENRES,GET_PLATFORMS, PAGINATE,FILTERS,GET_ID,
     RESET, FILTER_BY_GENRES, SEARCH_BY_NAME, SET_FILTER_TYPE} from "../Action/action.type";


     let initialState = {
        allVideoGame: [],
        allGenres: [],
        allVideoID: {},
        allplatfomrs: [],
        allVideoGameBackUp: [],
        currentPage: 0,
        currentPageNumber: 1,
        searchTerm: '',
        filters: {
            filterType: 'all',
            sortOrder: 'AZ',
            selectedGenre: null,
        },
    };


function rootReducer (state= initialState , action){
    switch (action.type) {
             case GET_VIDEOGAME:
                    const videoGamesWithAPI = action.payload.map(videoGame => ({
                    ...videoGame,
                    isFromAPI: !isNaN(videoGame.id),
                        }));
                return {
                   ...state,
                   allVideoGame: [...videoGamesWithAPI].splice(0, 15),
                   allVideoGameBackUp: videoGamesWithAPI,
                       }; 


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
                    case SET_FILTER_TYPE:
                        return {
                          ...state,
                          filters: {
                            ...state.filters,
                            filterType: action.payload, // Actualiza la fuente de búsqueda
                          },
                        };        

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
                    const selectedGenre = action.payload;
                    const selectedSource = state.filters.filterType;

                    let filteredGames = state.allVideoGameBackUp.filter(game => {
                      if (selectedSource === 'API') {
                        return game.genres.includes(selectedGenre) && game.isFromAPI;
                      } else if (selectedSource === 'DataBase') {
                         return game.genres.includes(selectedGenre) && !game.isFromAPI;
                      } else if (selectedSource === 'all') {
                        return game.genres.includes(selectedGenre);
                      }
                    });

                    return {
                      ...state,
                      allVideoGame: filteredGames.slice(0, 15),
                      currentPage: 0,
                      filter: true,
                      videoFiltered: filteredGames,
                      searchTerm: '',
                      currentPageNumber: 1,
                    };
                    
            case FILTERS:
                switch (action.payload) {
                    case "AZ":
                        let ase = [...state.allVideoGame].sort((prev, next) => {
                            if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
                            if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
                            return 0;
                        });
                        return {
                            ...state,
                            allVideoGame: [...ase].splice(0, 15),
                            allVideoGameBackUp: ase,
                            currentPage: 0,
                            currentPageNumber: 1,
                            filterType: state.filterType,
                        };
            
                    case "ZA":
                        let des = [...state.allVideoGame].sort((prev, next) => {
                            if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
                            if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
                            return 0;
                        });
                        return {
                            ...state,
                            allVideoGame: [...des].splice(0, 15),
                            allVideoGameBackUp: des,
                            currentPage: 0,
                            currentPageNumber: 1,
                            filterType: state.filterType,
                        };
             
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
                        filterType: state.filterType, 
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
                        filterType: state.filterType, 
                    } 
                    case "API":
                        const apiFiltered = state.allVideoGameBackUp.filter(videoGame => videoGame.isFromAPI);
                        return {
                            ...state,
                            allVideoGame: [...apiFiltered].splice(0, 15),
                            filterType: 'API',
                            currentPage: 0,
                            filter: true,
                            currentPageNumber: 1,
                            filterType: state.filterType, 
                        };
                    case "DataBase":
                        const dbFiltered = state.allVideoGameBackUp.filter( videoGame => !videoGame.isFromAPI);
                        return {
                            ...state,
                            allVideoGame: [...dbFiltered].splice(0, 15),
                            filterType: 'DataBase',
                            currentPage: 0,
                            filter: true,
                            currentPageNumber: 1,
                            filterType: state.filterType, 
                        };
                    case "all":
                        const all  = [...state.allVideoGameBackUp].splice(0,15)
                        return {
                            ...state,
                            allVideoGame: [...all].splice(0, 15),
                            filterType: 'all',
                            currentPage: 0,
                            filter: true,
                            currentPageNumber: 1,
                            filterType: state.filterType, 
                        };
                        
                
                    default: return state
                break;
               }
            
            default: return state 
        }
    }
export default rootReducer 