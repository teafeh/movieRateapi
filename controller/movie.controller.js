const movieModel = require("../model/movie.model");

const getallMovieList = async (req, res) => {
  try {
    const movieList = await movieModel.find({});
    res.status(200).json(movieList);
  } catch (error) {
    console.log("error in fechting blog", {
      message: error,
    });
  }
};

const createNewMovie = async (req, res) => {
  try {
    const response = await movieModel.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log("error in creating blog", {
      message: error,
    });
  }
};

const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await movieModel.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (error) {
    console.log("error in deleting movie", {
      message: error,
    });
  }
};

const editMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await movieModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log("error in editing movie", {
      message: error,
    });
  }
};
module.exports = {
  getallMovieList,
  createNewMovie,
  deleteMovieById,
  editMovieById,
};
