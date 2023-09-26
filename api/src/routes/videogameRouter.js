const {Router} = require("express");
const { getVideogameHandler,getAllVideoDBHandlers, getVideoIDHandler } = require("../handlers/videogamesHandler");



const videogameRouter = Router();
videogameRouter.get("/",getVideogameHandler)
videogameRouter.get("/all",getAllVideoDBHandlers)
videogameRouter.get("/:id",getVideoIDHandler)


module.exports = videogameRouter;