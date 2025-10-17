const express = require("express")
const { getallMovieList, createNewMovie } = require("../controller/movie.controller")
const router = express.Router()

router.get("/", getallMovieList)
router.post("/", createNewMovie);


module.exports = router