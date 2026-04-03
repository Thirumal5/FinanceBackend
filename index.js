import express from 'express'

const app=express();

app.get('/',(req,res)=>{

    console.log("This is Home page");
    res.send("This is home page");
})

app.listen(3000,()=>{
     console.log(" My server is running in 3000 port");
})