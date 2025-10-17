const express = require("express")
const { getallMovieList, createNewMovie, editMovieById, deleteMovieById } = require("../controller/movie.controller")
const router = express.Router()

router.get("/", getallMovieList)
router.post("/", createNewMovie);
router.delete("/:id", deleteMovieById);
router.put("/:id", editMovieById);


module.exports = router