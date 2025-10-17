require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express");
const app = express()

const movieRoute = require("./router/movie.route")
app.use(express.json())
app.use("/", movieRoute)
const PORT = 3100 

const start = async () => {
    try {
        await mongoose.connect(process.env.EVN_URL_MONDB);
        app.listen(PORT, () => {
          console.log(`server is live on port http://localhost:${PORT}`);
          console.log(`mongodb conneted`);
        });
    } catch (error) {
        console.log(error, "internal server error");
        
    }
}

start()