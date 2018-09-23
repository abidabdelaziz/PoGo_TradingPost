const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PogoPostSchema = new Schema({
    pokemon:String,
    cp: Number,
    gender : String,
    location: String,
    fastmove: String,
    chargemove: String,
    trainername:String,
    notes:String
});

const PogoTrade = mongoose.model("PogoTrade",PogoPostSchema)
module.exports = PogoTrade;