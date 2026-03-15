// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import connectDB from './config/mongodb.js';



// // App config

// const PORT= process.env.PORT|| 4000
// const app= express()
// await connectDB()
// //Intialize misddlewares
// app.use(express.json())
// app.use(cors())

// // API routes

// app.get('/',(req,res)=>{
//     res.send("API is working ")

// })
// app.listen(PORT,()=>console.log("server is running at",PORT))


import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// database connection
connectDB()

// routes
app.get('/', (req, res) => {
  res.send("API is working")
})

// export app for Vercel
export default app