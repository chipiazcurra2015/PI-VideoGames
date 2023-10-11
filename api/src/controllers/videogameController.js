require('dotenv').config();
const {API_KEY} = process.env;
const { get } = require("../routes");
const axios = require ("axios");
const {Videogame,Genre} = require ("../db");

const getVideogameControllers = async () => {
    const startPage = 1; 
    const endPage = 6;
    const allDataArray = [];
    for (let page = startPage; page <= endPage; page++) {
        const videogameAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
        const dataArray = videogameAPI.data.results;

        const manipulatedDataArray = dataArray.map((item) => ({
            id: item.id,
            name: item.name,
            rating: item.rating,
            description: item.description,
            released: item.released,
            genres: item.genres ? item.genres.map((genre) => genre.name) : [],
            background_image: item.background_image,
            platforms: item.platforms ? item.platforms.map((platform) => platform.platform.name) : [],
        }));

        allDataArray.push(...manipulatedDataArray);
    }

    return allDataArray;
};




const getVideogameDB = async () => {
    try {
      const getVideoDB = await Videogame.findAll({
        include: {
          model: Genre,
        },
      });
      const gamesWithAPIFormat = getVideoDB.map(g => {
        return {
          id: g.id,
          background_image:g.background_image,
          name: g.name,
          description: g.description,
          genres: g.Genres.map(genre => genre.name),
          rating: g.rating
        };
      });
      return gamesWithAPIFormat;
    } catch (error) {
      console.error('Error al obtener los videojuegos:', error);
      throw error;
    }
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
          const videoID = await Videogame.findByPk(id, {
            include: Genre,
          });
          
          if (videoID) {
            const videoInfo = {
              id: videoID.id,
              name: videoID.name,
              rating: videoID.rating,
              description: videoID.description,
              released: videoID.released,
              genres: videoID.Genres.map(genre => genre.name),
              background_image: videoID.background_image,
              platforms: videoID.platforms,
            };
            return videoInfo;
          }
        } else {
          const videoAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
          const videoData = videoAPI.data;
      
          const videoInfo = {
            id: videoData.id,
            name: videoData.name,
            rating: videoData.rating,
            description: videoData.description,
            released: videoData.released,
            genres: videoData.genres ? videoData.genres.map(genre => genre.name) : ["no tiene Género"],
            background_image: videoData.background_image,
            platforms: videoData.platforms ? videoData.platforms.map(platform => platform.platform.name) : [],
          };
          
          return videoInfo;
        }
      };




    const createVideoController = async (name,
        description,
        platforms,
        background_image,
        released,
        rating,
         genres,)=>{
            const newVideoGame = await Videogame.create({
        name,
        description,
        platforms,
        background_image,
        released,
        rating,});
        genres.forEach(async(g)=>{
            let genresDB = await Genre.findAll({
                where: {name : g}
            });
            await newVideoGame.addGenre(genresDB)
        })            
            console.log(genres);
        return newVideoGame;
    };


module.exports = {
    getVideogameControllers,
    getVideogameDB,
    getALLVideogameController,
    getVideoIDController,
    createVideoController,
  
}