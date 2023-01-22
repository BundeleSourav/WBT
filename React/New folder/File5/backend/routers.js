var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();


var Prod=new schema({
    prodid:String,
    pname:{type:String,trim:true,required:true},
    desc:String,
    price:String
})

var PD=mongoose.model('products',Prod,'products');

router.get("/products",function(req,resp){
    PD.find().exec(function(err,data){
        if(err)
        {
            resp.send("Error Occurred");
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/products/:prodid",function(req,resp){
    PD.findOne({prodid:req.params.prodid}).exec(function(err,data){
        if(err)
        {
            resp.send("Not Found");
        }
        else{
            resp.send(data);
        }
    })
})

router.post("/products",function(req,resp){
    var newprod=new PD({prodid:req.body.prodid,pname:req.body.pname,desc:req.body.desc,price:req.body.price});

    newprod.save(function(err,data){
        if(err)
        {
            resp.send("Not Added");
        }
        else{
            resp.send(data);
        }
    })
})

router.put("/products/:prodid",function(req,resp){
    PD.findOne({prodid:req.params.prodid},function(err,doc){
        if(err)
        {
            resp.send("Update Failed");
        }
        else{
            doc.prodid=req.body.prodid,
            doc.pname=req.body.pname,
            doc.desc=req.body.desc,
            doc.price=req.body.price
            doc.save(function(data){
                resp.send(data);
            })
        }
    })
})

router.delete("/products/:prodid",function(req,resp){
    PD.remove({prodid:req.params.prodid},function(err,data){
        if(err)
        {
            resp.send("Can't be deleted");
        }
        else{
            resp.send("Deleted Successfully");
        }
    })
})
module.exports=router;