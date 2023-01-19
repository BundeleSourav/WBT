var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var router=require("./routers");

mongoose.promise=global.promise;
const url='mongodb://127.0.0.1:27017/test';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));

app.use(function(req,resp,next){
    resp.setHeader('Access-Control-Allow-Origin','*');
    resp.setHeader('Access-Control-Allow-Methods','GET','PUT','POST','DELETE');
    resp.setHeader('Access-Control-Allow-Credentials',true);
    resp.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});

mongoose.connect(url,{
    connectTimeoutMS:2000
},function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connection is Done!!!!");
    }
});



app.use("/",router);
app.listen(6300)
console.log("Connection done!!!!!");

module.exports=app;