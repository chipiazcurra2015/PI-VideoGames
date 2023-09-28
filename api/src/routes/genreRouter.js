const {Router} = require("express");
const {getGenresHandler} = require ("../handlers/genresHandler");

const genreRouter = Router();
genreRouter.get("/",getGenresHandler)


module.exports = genreRouter;