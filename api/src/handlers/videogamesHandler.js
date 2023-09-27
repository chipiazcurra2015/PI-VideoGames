const {getVideogameControllers,getVideogameDB,
    getALLVideogameController, getVideoIDController,createVideoController} = require ("../controllers/videogameController");

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
            const {name} = req.query;
            const response = await getALLVideogameController(name);
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
};

const createVideoGameHanldrer = async(req , res)=>{
    try {
        const {name,
            description,
            platforms,
            background_image,
            released,
            rating,} = req.body
        const response = await createVideoController(name,
            description,
            platforms,
            background_image,
            released,
            rating,);
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};


module.exports = {
    getVideogameHandler,
    getAllVideoDBHandlers,
    getVideoIDHandler,
    createVideoGameHanldrer,
}