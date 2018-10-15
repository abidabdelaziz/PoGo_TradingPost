const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PogoPostSchema = new Schema({
    pokemon: {type:String, trim: true,required:"Pkmn Required"},
    cp: {type:Number,required:"CP Required"},
    gender: {type:String, trim: true,required:"Gender Required"},
    location: {type:String, trim: true,required:"Location Required"},
    fastmove: {type:String, trim: true,required:"Fastmove Required"},
    chargemove: {type:String, trim: true,required:"Chargemove Required"},
    trainername:{type:String, trim: true,required:"Trainer Name Required"},
    notes:{type:String, trim: true,required:"Notes Required"},
    email:{type:String, trim: true,required:"Notes Required"}
  
});
const CurrentTradesSchema = new Schema({
    tradeOne:{
        pokemon: {type:String, trim: true,required:"Pkmn Required"},
        cp: {type:Number,required:"CP Required"},
        gender : {type:String, trim: true,required:"Gender Required"},
        location: {type:String, trim: true,required:"Location Required"},
        fastmove: {type:String, trim: true,required:"Fastmove Required"},
        chargemove: {type:String, trim: true,required:"Chargemove Required"},
        trainername:{type:String, trim: true,required:"Trainer Name Required"},
        notes:{type:String, trim: true,required:"Notes Required"},
        email:{type:String, trim: true,required:"Email Required"}
    },
    
    tradeTwo:{
        pokemon: {type:String, trim: true,required:"Pkmn Required"},
        cp: {type:Number,required:"CP Required"},
        gender : {type:String, trim: true,required:"Gender Required"},
        location: {type:String, trim: true,required:"Location Required"},
        fastmove: {type:String, trim: true,required:"Fastmove Required"},
        chargemove: {type:String, trim: true,required:"Chargemove Required"},
        trainername:{type:String, trim: true,required:"Trainer Name Required"},
        notes:{type:String, trim: true,required:"Notes Required"},
        email:{type:String, trim: true,required:"Email Required"}
    }

    })



    const PogoChatSchema = new Schema({
        trade: {type:String, trim: true,required:"trade Required"},
        fromName: {type:String,required:"fromName Required"},
        fromEmail: {type:String, trim: true,required:"fromEmail Required"},
        toName: {type:String, trim: true,required:"toName Required"},
        toEmail: {type:String, trim: true,required:"toEmail Required"},
        messages: {type:Array,required:"messages Required"}
        
      
    });




const PogoTrade = mongoose.model("PogoTrade",PogoPostSchema)
const ActiveTrade = mongoose.model("ActiveTrade",CurrentTradesSchema)
const TradeChat=mongoose.model("TradeChat",PogoChatSchema)
module.exports = {PogoTrade,ActiveTrade,TradeChat};


