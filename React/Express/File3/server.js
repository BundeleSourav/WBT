var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var path=require('path');
var m=require('./module');

app.use(bodyparser.urlencoded({extended:false}))

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname})
});

app.get("/add",function(req,resp){
    resp.sendFile("cal.html",{root:__dirname})
});

app.get("/cal",function(req,resp){
    if(req.query.btn==="add"){
    var n1=req.query.n1;
    var n2=req.query.n2;
    var ans=m.addition(n1,n2);
    resp.send("<h1>Addition:- "+ans+"</h1>");}
    else{
        var n1=req.query.n1;
    var n2=req.query.n2;
    var ans=m.substraction(n1,n2);
    resp.send("<h1>Substraction:- "+ans+"</h1>")
    }
});



app.listen(8200)
console.log("Connection Done!!!!");