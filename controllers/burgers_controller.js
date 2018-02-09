var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");


router.get("/", function (req, res) {
    res.redirect("/burgers");
});
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    burgers.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burgers.update(req.params.id, function (result) {
        console.log(result);
        res.json("/");
    });
});


// Export routes for server.js to use.
module.exports = router;