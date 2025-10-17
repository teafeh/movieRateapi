const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    useName: {
        type: String,
        require: true,
        trim: true,
    },
    year: {
        type: Number,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("new movie", movieSchema)