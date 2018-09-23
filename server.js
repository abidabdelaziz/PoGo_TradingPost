const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Helps match os file calls
const mongoose = require("mongoose");

const PogoTrade =require("./models/pkmntrade")

const app = express();
const PORT= process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/pogopost",{ useNewUrlParser: true })
// Allows us to serve files out of the pogopost/build
app.use(express.static("pogopost/build"));


app.get("/", (req, res) =>{
    res.send("hi")
})
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