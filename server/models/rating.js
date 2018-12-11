console.log("inside of server/models/rating.js");

const mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    rating: { type: Number , required: [true, "Rating is required"]},
    comment: { type: String, required: [true, "Comment is required"]},
}, {timestamps: true})

mongoose.model("Rating", RatingSchema);
module.exports = RatingSchema;