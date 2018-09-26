const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PogoPostSchema = new Schema({
    pokemon: {type:String, trim: true,required:"Pkmn Required"},
    cp: {type:Number,required:"CP Required"},
    gender : {type:String, trim: true,required:"Gender Required"},
    location: {type:String, trim: true,required:"Location Required"},
    fastmove: {type:String, trim: true,required:"Fastmove Required"},
    chargemove: {type:String, trim: true,required:"Chargemove Required"},
    trainername:{type:String, trim: true,required:"Trainer Name Required"},//dbTrainer.username
    notes:{type:String, trim: true,required:"Notes Required"}
});

const PogoTrade = mongoose.model("PogoTrade",PogoPostSchema)
module.exports = PogoTrade;


