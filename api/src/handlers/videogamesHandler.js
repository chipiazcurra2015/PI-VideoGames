const {getVideogameControllers,getVideogameDB,
    getALLVideogameController, getVideoIDController} = require ("../controllers/videogameController");

const getVideogameHandler = async(req, res)=>{
        try {
            const response = await getVideogameControllers();
            res.status(200).json(response) 
        } catch (error) {
            res.status(400).json({error:error.message})
        };
}

const getAllVideoDBHandlers = async(req, res)=>{
        try {
            const response = await getALLVideogameController();
            res.status(200).json(response) 
        } catch (error) {
            res.status(400).json({error:error.message})
        };
}

const getVideoIDHandler = async(req, res)=>{
        try {
            const{id} = req.params
            const response = await getVideoIDController(id);
            res.status(200).json(response) 
        } catch (error) {
            res.status(400).json({error:error.message})
        };
}



module.exports = {
    getVideogameHandler,
    getAllVideoDBHandlers,
    getVideoIDHandler,
}