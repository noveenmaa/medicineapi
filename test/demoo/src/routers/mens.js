const express=require('express')
const router= express.Router()
const mendata=require('../models/men')

router.post('/mens',async(req,res)=>{
    try {
        const data= mendata(req.body)
        const newdata=await data.save()
        console.log(newdata);
        res.json(newdata)
    } catch (error) {
        res.status("401").json("something went worng")
    }
})

router.get('/mens',async(req,res)=>{
    try {
         const data=await mendata.find({}).sort({"ranking":1})
         res.send(data).status(201)
    } catch (error) {
        res.status("401").json("something went worng")
    }
})


router.get('/mens/:id',async(req,res)=>{
    try {
        const _id=req.params.id
         const data=await mendata.findById({_id})
         res.send(data).status(201)
    } catch (error) {
        res.status("401").json("something went worng")
    }
})

router.patch('/mens/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const data=await mendata.findByIdAndUpdate(_id,req.body,{new:true})
        res.status(201).json(data)

    } catch (error) {
        res.status("401").json("something went worng")
    
    }
})

router.delete('/mens/:id',async(req,res)=>{
    try {
        const _id=req.params.id
         const data=await mendata.findByIdAndDelete({_id})
         res.send(data).status(201)
    } catch (error) {
        res.status("401").json("something went worng")
    }
})


module.exports=router