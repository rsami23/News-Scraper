// REQUIRED DEPENDENCIES
var mongoose = require("mongoose");

// REFERENCE TO THE SCHEMA CONSTRUCTOR
var Schema = mongoose.Schema;

// CREATE COMMENTS SCHEMA 
var NoteSchema = new Schema({
    title: String,
    body: String
});

// CREATE THE MODEL FROM THE ABOVE SCHEMA
var Note = mongoose.model("Note", NoteSchema);

// EXPORT THE NOTE MODEL
module.exports = Note; 