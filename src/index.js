import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { application } from "express";
// require('dotenv').config()
// function connectDB(){}
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000, ()=>{
        console.log(`*     Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!!!",err);
})
//As early as possible in yout application , import and configure dotenv:

// require('dotenv').config({path: './env})
// console.log(process.env)
















/*

import express from "express";
const app=express()
;(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=> {
            console.log("ERR: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()   //IIFE jab bhi log lagate hain to semicolon first me use karte
// connectDB()
*/



