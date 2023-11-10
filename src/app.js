import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const application = express()

application.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
    
}))

application.use(express.json({limit:"30kb"}))
application.use(express.urlencoded({extended: true, limit:"30kb"}))
application.use(express.static("public"))
application.use(cookieParser())



export { application }