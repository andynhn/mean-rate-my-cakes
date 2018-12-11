console.log("inside of server/models/cake.js");

const mongoose = require("mongoose");
var RatingSchema = require("./rating.js");

var CakeSchema = new mongoose.Schema({
    name: { type: String , required: [true, "Name is required"], maxlength: 255},
    image: { type: String, required: [true, "Image is required"], maxlength: 1000},
    ratings: [RatingSchema]
}, {timestamps: true})

mongoose.model("Cake", CakeSchema);