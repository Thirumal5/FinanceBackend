import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDb from './DB/Db.js'

const app=express();

app.get('/',(req,res)=>{

    console.log("This is Home page");
    res.send("This is home page");
})
 connectDb();
app.listen(3000,()=>{
   
     console.log(" My server is running in 3000 port");
})