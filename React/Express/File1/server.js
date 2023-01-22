var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var mm=require("./module");
app.use(bodyparser.urlencoded({extended:false}))

app.get("/aboutus",function(req,resp){
    resp.send("<h1>Please Enter Valid Url</h1>")
})
app.get("/addition",function(req,resp){
    resp.sendFile("addition.html",{root:__dirname})
})

app.get("/calculate",function(req,resp){
    var n1=req.query.n1;
    var n2=req.query.n2;
    var ans=mm.addition(n1,n2)
    resp.send("<h1>Result"+ans+"</h1>");
})


app.listen(4500)
console.log("Connection is Done");
