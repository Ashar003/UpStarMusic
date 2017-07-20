// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number //We should store revenue as a number for easy currency conversion.
});
 
 //NO MODEL. JUST SCHEMA.

module.exports = AlbumSchema;
