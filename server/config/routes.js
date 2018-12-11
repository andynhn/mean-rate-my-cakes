console.log("inside of server/config/routes.js")

const Cake = require("../controllers/cakes.js");
const Rating = require("../controllers/ratings.js");

module.exports = function(app) {
    // Cakes
    app.get('/cakes', function(req, res) {
        Cake.getCakes(req, res);
    });
    app.get('/cakes/:id', function(req, res) {
        Cake.getCake(req, res);
    });
    app.post('/cakes', function(req, res) {
        Cake.createCake(req, res);
    });
    app.put('/cakes/:id', function(req, res) {
        Cake.updateCake(req, res);
    });
    app.delete('/cakes/:id', function(req, res) {
        Cake.deleteCake(req, res);
    });
    // Ratings
    // app.get('/ratings', function(req, res) {
    //     Rating.getRatings(req, res);
    // });
    // app.get('/ratings/:id', function(req, res) {
    //     Rating.getRating(req, res);
    // });
    app.post('/ratings/:id', function(req, res) {
        Rating.createRating(req, res);
    });
    // app.put('/ratings/:id', function(req, res) {
    //     Rating.updateRating(req, res);
    // });
    // app.delete('/ratings/:id', function(req, res) {
    //     Rating.deleteRating(req, res);
    // });
}