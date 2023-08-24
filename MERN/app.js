const express=require('express');
const http=require('http');
const mongoose=require('mongoose');
const socketIO=require('socket.io');
const MongoClient=require('mongodb').MongoClient;
const chart=require('chart.js');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();
const server=http.createServer(app);
const io=socketIO(server);
mongoose.promise=global.promise;

const URL='mongodb://127.0.0.1:27017/test';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(function(req,resp,next){
    resp.setHeader('Access-Control-Allow-Origin','*');
    resp.setHeader('Access-Control-Allow-Methods','GET','PUT','POST','DELETE');
    resp.setHeader('Access-Control-Allow-Credentials',true);
    resp.setHeader('Access-Control-Allow-Header','Content-Type');
    next();
});

mongoose.connect(URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Database Connected")).catch(
  (err) => console.log(err)
);

const schema=new mongoose.Schema({
    title:String,
    labels:{type:[String],required:true},
    data:{type:[Number],required:true}
});

const DATA=mongoose.model('DATA',schema);

io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('fetchData', async () => {
      try {
        const data = await DATA.find();
        socket.emit('dataUpdate', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  
    socket.on('addData', async (newData) => {
      try {
        const createdData = await DATA.create(newData);
        io.emit('dataAdded', createdData);
      } catch (error) {
        console.error('Error adding data:', error);
      }
    });

    socket.on('editData', async (newData) => {
        try {
          const createdData = await DATA.findOneAndUpdate(newData);
          io.emit('dataAdded', createdData);
        } catch (error) {
          console.error('Error adding data:', error);
        }
      });
  
    socket.on('deleteData', async (labels) => {
      try {
        await DATA.findOneAndDelete(labels);
        io.emit('dataDeleted', labels);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });



app.get('/data',(req,resp)=>{
    DATA.find()
    .then((data)=>{
        console.log("Data fetched successfully:",data);
        resp.status(200).json(data);
    }).catch((err)=>{
        console.log("Error fetching data from database:",err);
        resp.status(500).json({error:'Error Fetching Data'});
    });
});

app.post('/add',async (req,resp)=>{
    console.log("In Post Method");
    try{
        const newData=new DATA({
            title:req.body.title,
            labels:req.body.labels,
            data:req.body.data
        });

        const saveData=await newData.save();
        console.log("Data added sucessfully:",saveData);
        resp.status(201).send("Added");
    } catch(err){
        console.log("Error Occurred:",err);
        resp.status(501).send("Server not supported");
    }
});

app.put('/edit/:labels',async(req,resp)=>{
    const {labels}=req.params;
    const {title,data}=req.body;
    try{
        const updateData=await DATA.findOneAndUpdate(
            {labels:labels},
            {title,data},
            {new:true}
        );
        if(!updateData)
        {
            return resp.status(404).send("Data Not Found");
        }

        console.log("Data updated successfully:",updateData);
        resp.status(200).json(updateData);
    } catch(err){
        console.log("Error Occurred:",err);
        resp.status(500).send("Error updating data");
    }
});

app.delete('/delete/:labels',async(req,resp)=>{
    const {labels}=req.params;

    try{
        const deleteData=await DATA.findOneAndDelete({
            labels:labels
        });
        if(!deleteData)
        {
            return resp.status(404).send("Data Not Found");
        }

        console.log("Data deleted successfully:",deleteData);
        resp.status(200).json(deleteData);
    }   catch(err){
        console.log("Error Occurred while deleting",err);
        resp.status(500).send("Error while deleting data");
    }
});



server.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
});

