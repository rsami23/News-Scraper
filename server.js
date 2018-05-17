// REQUIRED DEPENDENCIES
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// SET UP EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// SET UP EXPRESS FOR DATA PARSING
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//START SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
