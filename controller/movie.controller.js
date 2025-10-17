const movieModel = require("../model/movie.model")

const getallMovieList = async (req, res) => {
    try {
        const movieList = await movieModel.find({})
        res.status(200).json(movieList)
        
    } catch (error) {
        console.log("error in fechting blog", { 
            message: error
        });
        
    }
}

const createNewMovie = async (req, res) => {
    try {
        const response = await movieModel.create(req.body) 
        res.status(201).json(response)
        
    } catch (error) {
        console.log("error in creating blog", { 
            message: error
        })
    }
}

module.exports = {
    getallMovieList,
    createNewMovie,
}