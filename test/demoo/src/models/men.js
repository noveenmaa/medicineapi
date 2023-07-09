const mongoose=require('mongoose')

const menData=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    events:{
        type:String,
        default:"hundred meter"

    }

})


const data=new mongoose.model('Rank',menData)

module.exports=data