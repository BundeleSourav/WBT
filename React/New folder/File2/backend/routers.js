var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();

var stud=new schema({
    rollno:Number,
    name:{type:String,trim:true,required:true},
    course:{type:String,trim:true,required:true},
    DOA:Date,
    marks:Number,
    phoneno:Number
});

const STD=mongoose.model('emptab',stud,'emptab');

router.get("/student",function(req,resp){
    STD.find().exec(function(err,data){
        if(err)
        {
            resp.send(err);
        }
        else{
            resp.send(data);
        }
    })
});

router.get("/student/:rollno",function(req,resp){
    STD.findOne({rollno:req.params.rollno}).exec(function(err,data){
        if(err)
        {
            resp.send(err);
        }
        else{
            resp.send(data);
        }
    })
});

router.post("/student",function(req,resp){
    var newstd=new STD({rollno:req.body.rollno,name:req.body.name,course:req.body.course,DOA:req.body.DOA,marks:req.body.marks,phoneno:req.body.phoneno});

    newstd.save(function(err,data){
        if(err)
        {
            resp.send(err);
        }
        else{
            resp.send(data);
        }
    })
});

router.put("/student/:rollno",function(req,resp){
    STD.findOne({rollno:req.params.rollno},function(err,doc){
        if(err)
        {
            resp.send(err);
        }
        else{
            doc.rollno=req.body.rollno,
            doc.name=req.body.name,
            doc.course=req.body.course,
            doc.DOA=req.body.DOA,
            doc.marks=req.body.marks,
            doc.phoneno=req.body.phoneno

            doc.save(function(data){
                resp.send(data);
            })
        }
    })
});

router.delete("/student/:rollno",function(req,resp){
    STD.remove({rollno:req.params.rollno},function(err,data){
        if(err)
        {
            resp.send(err);
        }
        else{
            resp.send("Deleted successfully");
        }
    })
});

module.exports=router;