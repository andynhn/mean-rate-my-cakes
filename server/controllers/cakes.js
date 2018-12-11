console.log("inside of server/controllers/cakes.js");

const mongoose = require("mongoose"),
        Cake = mongoose.model("Cake");
// const Rating = mongoose.model("Rating");

// ES5 Syntax----------
module.exports = {
    getCakes: function(req, res){
        Cake.find({}, function(err,cakes){
            if(err) {
                res.json({"status": "not ok", "errors": err})
            } else {
                res.json({"status": "ok", "cakes": cakes});
            }
        });
    },
    getCake: function(req, res){
        Cake.findById(req.params.id, function(err, cake) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok", "cake": cake});
            }
        });
    },
    createCake: function(req, res){
        var cake = new Cake(req.body);
        cake.save(function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
    updateCake: function(req, res){
        Cake.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, cake) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
    deleteCake: function(req, res){
        Cake.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
}

// ES6 Syntax:------------
// class Cakes {
//     getCakes(req, res){
//         Cake.find({}, function(err,cakes){
//             if(err) {
//                 res.json({"status": "not ok", "errors": err})
//             } else {
//                 res.json({"status": "ok", "cakes": cakes});
//             }
//         });
//     }
//     getCake(req, res){
//         Cake.findById(req.params.id, function(err, cake) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok", "cake": cake});
//             }
//         });
//     }
//     createCake(req, res){
//         var cake = new Cake(req.body);
//         cake.save(function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     updateCake(req, res){
//         Cake.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, cake) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     deleteCake(req, res){
//         Cake.findByIdAndDelete(req.params.id, function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
// }
// module.exports = new Cakes();