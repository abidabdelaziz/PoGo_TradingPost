const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Helps match os file calls
const mongoose = require("mongoose");

const {PogoTrade, ActiveTrade, TradeChat} =require("./models/pkmntrade")
const app = express();
const PORT= process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pogopost",{ useNewUrlParser: true })
// Allows us to serve files out of the pogopost/build
app.use(express.static("pogopost/build"));


app.get("/", (req, res) =>{
    res.send("hi")
})

app.get("/pkmn/get", (req,res) => {

    console.log("trying to fetch posts")
    // Model is how we interact with DB, mongoose queries
    PogoTrade.find({}).sort({createdAt: 1}).then(results => res.json(results));
     
});


app.get("/pkmn/search/:pokemon/:cp/:location/:trainername", (req,res) => {

    console.log("trying to fetch posts")
    console.log("req",req.params)
     PogoTrade.find( { $and: [ { pokemon: { $eq: req.params.pokemon } },
                         { cp: { $gte: parseInt(req.params.cp) } },
                         { location: { $eq: req.params.location } },
                         { trainername: { $eq: req.params.trainername } } ] } ).then(results => res.json(results));
    
});



app.get("/pkmn/userTrades/:email", (req,res) =>{

    ActiveTrade.find({$or :[{'tradeOne.email' : req.params.email},
    {'tradeTwo.email' : req.params.email} ]}).then(results=>res.json(results))
    

})


app.get("/pkmn/getChats/:email", (req,res) => {

    console.log("hello")

console.log(req.params)
    TradeChat.find({$or :[{'toEmail' : req.params.email.substring(1),},{'fromEmail' : req.params.email.substring(1)} ]}).then(results => res.json(results));
    
  
});


app.post("/pkmn/post", (req,res)=>{
    

    PogoTrade.create(req.body).then(dbPogoTrade =>{
        res.json(dbPogoTrade)
       
    })

    res.json(true)
})

app.post("/pkmn/offer",(req,res)=>{


    ActiveTrade.create(req.body).then(dbPogoTrade =>{
        res.json(dbPogoTrade)
    })

})

app.post("/pkmn/chat",(req,res)=>{

    TradeChat.updateOne({$and :[{'trade' : req.body.trade,},{'fromEmail' : req.body.fromEmail} ]},
    {$addToSet : { "messages":req.body.messages},
     $set : {"trade" : req.body.trade,
             "fromName":req.body.fromName,
             "fromEmail":req.body.fromEmail,
             "toName":req.body.toName,
             "toEmail":req.body.toEmail,
    
    }},
    { upsert : true, new :true })
        .then(dbPogoTrade =>{
        res.json(dbPogoTrade)

        //still broken, works if doc already exists, else only creates message field
        
    })
})


//catch all
app.use(function(req,res){
    res.sendFile(path.join(__dirname, "pogopost/build/index.html"))
})

app.listen(PORT, function(){
    console.log(`API server npw listeniong on ${PORT}`)
})