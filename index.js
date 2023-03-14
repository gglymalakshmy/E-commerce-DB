const express=require("express");
const connectDB = require("./Config/db");
const router = require("./Routes/routes");
const cors=require("cors");
const app=express();
connectDB()
app.use(express.json())
app.use(cors());
// app.get("/",(req,res)=>{
//     res.json("home.....")
// })
app.use("/",router)
app.listen(5000,()=>console.log("Server is running..........."))