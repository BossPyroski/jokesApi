const express = require("express");
const port = 8000;
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./server/config/mongoose.config")
// require("./server/controllers/joke.controller")
const allRoutes = require("./server/routes/jokes.routes")
allRoutes(app)

app.listen(port, () => console.log(`Listening on port ${port} `) );
