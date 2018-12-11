console.log("inside of server/controllers/ratings.js");

const mongoose = require("mongoose"),
        Rating = mongoose.model("Rating"),
        Cake = mongoose.model("Cake");

// ES5 Syntax----------
module.exports = {
    // getRatings: function(req, res){
    //     Rating.find({}, function(err,ratings){
    //         if(err) {
    //             res.json({"status": "not ok", "errors": err})
    //         } else {
    //             res.json({"status": "ok", "ratings": ratings});
    //         }
    //     });
    // },
    // getRating: function(req, res){
    //     Rating.findById(req.params.id, function(err, rating) {
    //         if(err) {
    //             res.json({"status": "not ok", "errors": err});
    //         } else {
    //             res.json({"status": "ok", "rating": rating});
    //         }
    //     });
    // },
    createRating: function(req, res){
        var rating = new Rating(req.body);
        rating.save(function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: rating}}, function(err, rating){
                    if(err) {
                        res.json({"status": "not ok", "errors": err});
                    } else {
                        res.json({"status": "ok", "rating": rating});
                    }
                });
            }
        });
    },
    // updateRating: function(req, res){
    //     Rating.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, rating) {
    //         if(err) {
    //             res.json({"status": "not ok", "errors": err});
    //         } else {
    //             res.json({"status": "ok"});
    //         }
    //     });
    // },
    // deleteRating: function(req, res){
    //     Rating.findByIdAndDelete(req.params.id, function(err) {
    //         if(err) {
    //             res.json({"status": "not ok", "errors": err});
    //         } else {
    //             res.json({"status": "ok"});
    //         }
    //     });
    // },
}

// ES6 Syntax:------------
// class Ratings {
//     getRatings(req, res){
//         Rating.find({}, function(err,tasks){
//             if(err) {
//                 res.json({"status": "not ok", "errors": err})
//             } else {
//                 res.json({"status": "ok", "ratings": ratings});
//             }
//         });
//     }
//     getRating(req, res){
//         Rating.findById(req.params.id, function(err, rating) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok", "rating": rating});
//             }
//         });
//     }
//     createRating(req, res){
//         var rating = new Rating(req.body);
//         rating.save(function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     updateRating(req, res){
//         Rating.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, rating) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     deleteRating(req, res){
//         Rating.findByIdAndDelete(req.params.id, function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
// }
// module.exports = new Ratings();