const {Router} = require("express");
const { getVideogameHandler,getAllVideoDBHandlers, getVideoIDHandler,createVideoGameHanldrer } = require("../handlers/videogamesHandler");



const videogameRouter = Router();
videogameRouter.get("/",getAllVideoDBHandlers)
videogameRouter.post("/",createVideoGameHanldrer)
videogameRouter.get("/all",getAllVideoDBHandlers)
videogameRouter.get("/:id",getVideoIDHandler)


module.exports = videogameRouter;