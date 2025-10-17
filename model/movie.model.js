const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("new movie", movieSchema)