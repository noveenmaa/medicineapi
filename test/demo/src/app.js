const express = require("express");
const db = require("./db/database");
const datastud = require("./models/student");
const app = express();
const port = 8000;

app.use(express.json());

app.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const data = new datastud(req.body);

    const insert = await data.save();
    res.json(insert).status(201);
  } catch (error) {
    res.status(401).send("some thing went worng");
  }
});



app.get('/student',async(req,res)=>{
    try {
      const data= await datastud.find({})
      res.status(200).json(data)  
    } catch (error) {
        res.status(401).send("some thing went worng")
        
    }
})


app.get('/student/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const data=await datastud.findById({_id})
        res.status(201).json(data)
    } catch (error) {
        res.status(401).send("some thing went worng")
    }
})


app.delete('/student/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        console.log(_id);
        const data=await datastud.deleteOne({_id})
        res.status(201).json(data)
        console.log(data);
    } catch (error) {
        res.status(401).send("some thing went worng")
    }
})


app.patch('/student/:id',async(req,res)=>{
    try {
       const _id=req.params.id
       const data=await datastud.findByIdAndUpdate(_id,req.body,{new:true}) 
       res.status(201).json(data)
    } catch (error) {
        res.status(401).send("some thing went worng")
    }
})
app.listen(port, () => {
  console.log("the port is listening");
});
