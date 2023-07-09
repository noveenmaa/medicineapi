const express=require('express')
const db=require('./config/conn')
const routmen=require('./routers/mens')
const app=express()
const port=8000
 


app.use(express.json())
app.use('/',routmen)

app.listen(port,()=>{
    console.log("connected to server");
})