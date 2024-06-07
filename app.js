require("dotenv").config();
require("./config/connection");
require("./config/authStrategy.js")
const express = require("express")
const cors= require("cors");
const session = require('express-session')
const morgan = require("morgan")
const LocalStrategy = require('passport-local').Strategy
const helmet = require('helmet')
const path = require("node:path");
const app = express();
const PORT = process.env.port || 3000;

const bookRoutes = require("./routes/bookRoutes")
const authRoutes = require("./routes/authRoutes")


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/public')));
app.use(morgan("dev"))
app.use(helmet)
app.use(session)

 app.get("/",(request,response,next) => {
//  response.send ("This route points to the Home page")
    response.status(200).json({success:{message:"This route points to the Home page"}})

 })

// app.get("/about",(request,response,next) => {
//     // response.send ("This route points to the About page")
//     response.status(200).json({success:{message:"This route points to the About page"}})
// })

// app.get("/login",(request,response,next) => {
//     // response.send ("This route points to the Login page")
//     response.status(200).json({success:{message:"This route points to the Login page"}})
// })

// app.get("/admin",(request,response,next) => {
//     // response.send ("This route points to the Admin Console page")
//     response.status(200).json({success:{message:"This route points to the Admin Console page"}})

// })

//  app.get("/admin/create-book",(request,response,next) => {
//  response.send ("This route points to the Create Book page")
//  response.status(200).json({success:{message:"This route points to the Create page"}})
//  })

 app.use("/api/books",bookRoutes)
// app.use("/",authRoutes)

 app.listen(PORT,() => {
     console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
 }) 



