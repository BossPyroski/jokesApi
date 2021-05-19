const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required:[true, "Content is required?! duh"],
        minLength: [3, "Input must be at least 3 characters"],
        maxLength:[100000000,"We said quote, not dissertation..."]
    },
    punchline:{
        type: String,
        required:[true, "Content is required?! duh"],
        minLength: [3, "Input must be at least 3 characters"],
        maxLength:[100000000,"We said quote, not dissertation..."]
    },


}, {timestamps:true} )

module.exports.Joke = mongoose.model("Joke",JokeSchema);

