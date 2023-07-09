const mongoose=require('mongoose')
const validator=require('validator')

const dataStudent=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"this not a valid email id"],
        validate(val){
       if(!validator.isEmail(val)){
        throw new Error('this an invalid id')
       }
        }
    },
    phone:{
        type:Number,
        required:true
    },
})


const dataSet= new mongoose.model("studentData", dataStudent)

module.exports=dataSet