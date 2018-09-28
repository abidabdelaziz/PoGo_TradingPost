const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Helps match os file calls
const mongoose = require("mongoose");

const PogoTrade =require("./models/pkmntrade")

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


app.get("/pkmn/search/:pokemon/:gender", (req,res) => {

    console.log("trying to fetch posts")
    console.log("req",req.params)
    PogoTrade.find( { $and: [ { pokemon: { $eq: req.params.pokemon } }, { gender: { $eq: req.params.gender } } ] } ).then(results => res.json(results));
    
    
    
  
});



app.post("/pkmn/post", (req,res)=>{
    console.log(req.body)

    PogoTrade.create(req.body).then(dbPogoTrade =>{
        res.json(dbPogoTrade)
        console.log(dbPogoTrade)
    })

    res.json(true)
})
//catch all
app.use(function(req,res){
    res.sendFile(path.join(__dirname, "pogopost/build/index.html"))
})

app.listen(PORT, function(){
    console.log(`API server npw listeniong on ${PORT}`)
})