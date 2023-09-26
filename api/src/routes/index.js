const { Router } = require('express');
const videogameRouter = require ("../routes/videogameRouter");
const genreRouter = require ("../routes/genreRouter");


const router = Router();

router.use("/videogames",videogameRouter);
router.use("/genres",genreRouter); 


module.exports = router;
