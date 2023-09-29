require('dotenv').config();
const {API_KEY} = process.env;
const { get } = require("../routes");
const axios = require ("axios");
const {Videogame,Genre} = require ("../db");

const getGenresController = async ()=> {
    const getGenre = Genre.findAll();
    if(!getGenre.lenght){
         const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        let allDataArray = []
        data.results.forEach((genero)=>allDataArray.push(genero.name));
        allDataArray.forEach(g=>{
            Genre.findOrCreate({
                where: { name:g}
            })
        })
        return allDataArray;
    }
    return getGenre;
 };

module.exports = {
    getGenresController,
}