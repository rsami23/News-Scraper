// REQUIRED DEPENDENCIES
var mongoose = require("mongoose");

// REFERENCE TO THE SCHEMA CONSTRUCTOR
var Schema = mongoose.Schema;

// ARTICLE SCHEMA CONSTRUCTOR
var ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    photo: {

    },
});

// CREATES THE MODEL FROM THE SCHEMA
var Article = mongoose.model("Article", ArticleSchema);

// EXPORT THE MODEL
module.exports = Article;
