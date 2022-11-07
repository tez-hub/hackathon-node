import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import advocateRoute from "./routes/advocates.js"
import companyRoute from "./routes/company.js"

const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected")
    } catch(err){
        throw err;
    }
}

// middlewares
app.use(express.json())
app.use("/advocates", advocateRoute)
app.use("/company", companyRoute)

app.listen(8000, ()=>{
    connect()
    console.log("Connected")
})