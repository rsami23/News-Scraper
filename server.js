// REQUIRED DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// SCRAPING TOOLS
const axios = require("axios");
const cheerio = require("cheerio");

// REQUIRE MODELS
const db = require("./models");

// SET UP EXPRESS
var app = express();
const PORT = process.env.PORT || 8080;

// SET UP HANDLEBARS
app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
    res.render("home.handlebars");
});

// MIDDLEWARE
// SET UP EXPRESS FOR DATA PARSING
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// MAKE PUBLIC FOLDER STATIC
app.use(express.static("public"));

// CONNECT TO MONGO DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Scraper_db";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var routes = require("./controllers/routes.js");
app.use(routes);

//START SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
