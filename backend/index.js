
const express=require("express");
const dotenv=require("dotenv"); 
const cors=require("cors");

dotenv.config();
const db=require("./db");


const port=process.env.PORT || 3000;
const app=express();

app.get("/",(req,res)=>res.send("server is started 🚀"));
app.get("/home",(req,res)=>res.send({
    msg:"Home 🏡"
}))

app.listen(port,()=>console.log(`\n\t Server is running on port ${port} 🔥 \n`));