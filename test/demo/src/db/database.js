const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/studentapi')
.then(()=>{
    console.log("the data base is connected succesfullu");
}).catch((error)=>{
    console.log(error);
})

