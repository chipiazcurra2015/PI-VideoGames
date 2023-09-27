require('dotenv').config();
const {API_KEY} = process.env;
const { get } = require("../routes");
const axios = require ("axios");
const {Videogame,Genre} = require ("../db");

const getVideogameControllers = async (page = 1, pageSize = 40) => {
    //aca  Obtengo los datos de la API usando paginación
    const videogameAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`);
    const dataArray = videogameAPI.data.results;

    const manipulatedDataArray = await dataArray.map((item) => {
        const manipulatedItem = {
            id: item.id,
            name: item.name,
            rating: item.rating,
            description: item.description,
            released: item.released,
            genres: item.genres,
            background_image: item.background_image,
            platforms: item.platforms ? item.platforms.map((platform) => platform.platform.name) : [],
        };

        return manipulatedItem;
    });

    return manipulatedDataArray;
};
    const getVideogameDB = async ()=>{
        //get modelo
        const getVideoDB = await Videogame.findAll();
        return getVideoDB;
    };

    const getALLVideogameController = async(name)=>{
        // trae toda la API tanto de la ---db como de la API y busca por Name
        const videoDB = await getVideogameDB();
        const videoAPI = await getVideogameControllers();
            const allVideoGame = [...videoDB,...videoAPI];
            if(name){
                const videoFound = allVideoGame.filter((video)=>video.name.toLowerCase().includes(name.toLowerCase()));
                return videoFound.slice(0,16);
            }
            return allVideoGame;
    };


    const getVideoIDController = async (id) => {
        if (isNaN(id)) {
            const videoID = await Videogame.findByPk(id);
            return videoID;
        } else {
            const videoAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            const videoData = videoAPI.data;
                const videoInfo = {
                id: videoData.id,
                name: videoData.name,
                rating: videoData.rating,
                description: videoData.description,
                released: videoData.released,
                genres: videoData.genres,
                background_image: videoData.background_image,
                platforms: videoData.platforms? videoData.platforms.map((platform)=>platform.platform.name):"",
            };
            return videoInfo;
        }
    };
    const createVideoController = async (name,
        description,
        platforms,
        background_image,
        released,
        rating,)=>{
            const newVideoGame = await Videogame.create({
        name,
        description,
        platforms,
        background_image,
        released,
        rating,})
        return newVideoGame;
    };
    const getBynameController  = async () =>{

    }
module.exports = {
    getVideogameControllers,
    getVideogameDB,
    getALLVideogameController,
    getVideoIDController,
    createVideoController,
    getBynameController,
}