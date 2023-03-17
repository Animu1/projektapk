import mongoose from "mongoose";

// Defining Schema
const filmsSchema = new mongoose.Schema({
  Tytuł:{type:String, required:true, trim:true},
  Premiera:{type:String, required:true, trim:true},
})

// Model 
const FilmyModel = mongoose.model("filmy", filmsSchema)

export default FilmyModel