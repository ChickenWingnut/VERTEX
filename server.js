var express = require("express");
var app=express();
var path = require("path");
app.use(express.static(path.join(__dirname,".")));

app.listen(3000, ()=>{
    console.log("server started")
});
app.get("/", (req, res)=>{

    res.sendFile(__dirname+"/index.html");
});
app.get("/about", (req,res)=>{

    res.sendFile(_dirname+"/public/About.html")
})
app.get("/question", (req,res)=>{

    res.sendFile(_dirname+"/questionarre/index.html")
})

function x(){
   var p=0;
}