var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var er=require('./emparr');
var path=require('path');

app.use(bodyparser.urlencoded({extended:false}))

app.get("/",function(req,resp){
    resp.sendFile("Form1.html",{root:__dirname})
});

app.get("/addform",function(req,resp){
    resp.sendFile("form.html",{root:__dirname});
})

app.get("/empdata",function(req,resp){
    if(req.query.btn==="add")
    {
        var id=req.query.id;
        var name=req.query.name;
        var desg=req.query.desg;
        var ob={id,name,desg};
        er.setemp(ob);
        console.log(er.getlength());
        resp.send("<h1>Added Successfully</h1>");
    }
    else{
        var id=req.query.id;
        var ob1=er.searchob(id);
        if(ob1!=null)
        {
            resp.send(JSON.stringify(ob1));
        }
        else{
            resp.send("Employee not Found");
        }
    }
})

app.listen(9000);
console.log("Connection done");