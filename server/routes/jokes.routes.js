




const JokeController = require("../controllers/joke.controller")

module.exports = app =>{
    app.get("/api/jokes/", JokeController.index);
    app.get("/api/jokes/:id", JokeController.show);
    app.put("/api/jokes/:id", JokeController.update);
    app.post("/api/jokes/", JokeController.create);
    app.delete("/api/jokes/:id", JokeController.delete);
}