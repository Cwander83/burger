var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");



// Export routes for server.js to use.
module.exports = router;