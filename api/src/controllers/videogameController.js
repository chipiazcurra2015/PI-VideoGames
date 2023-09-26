require('dotenv').config();
const {API_KEY} = process.env;
const { get } = require("../routes");
const axios = require ("axios");
const {Videogame,Genre} = require ("../db");

const getVideogameControllers = async ()=>{
    //get a API
   
    const videogameAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const dataArray = videogameAPI.data.results;
        return dataArray;
};
     
    const getVideogameDB = async ()=>{
        //get modelo
        const getVideoDB = await Videogame.findAll();
        return getVideoDB;
    };

    const getALLVideogameController = async()=>{
        // trae toda la API tanto de la ---db como de la API
        const videoDB = await getVideogameDB();
        const videoAPI = await getVideogameControllers();
        if(!videoDB.length & !videoAPI)
            throw new Error ("No se encontro VideoGame");
            const allVideoGame = [...videoDB,...videoAPI];
            return allVideoGame;
    };
       const getVideoIDController = async (id)=>{
            if(isNaN(id)){
                const videoID = await Videogame.findByPk(id);
                return videoID;
            };
                const videoAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                return videoAPI.data;
       }
module.exports = {
    getVideogameControllers,
    getVideogameDB,
    getALLVideogameController,
    getVideoIDController,
}