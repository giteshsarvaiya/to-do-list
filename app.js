// this is the server of my web
const express = require("express");
const bodyParser =  require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hello world!");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})