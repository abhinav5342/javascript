const express = require('express');

const app = express();
const PORT= 3000;

app.get('/', function(req,res){
    res.send("welcome!");
});
app.put('/home', function(req,res){
    res.send("Party started");
});
app.patch('/home',function(req,res){
    res.send("Patch request received ");
});

app.listen(PORT, function process(){
    console.log("Server started");
});