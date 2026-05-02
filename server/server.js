import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


// app initialization

const PORT= process.env.PORT || 5000


const app = express()





// middleware
app.use(express.json())
app.use(cors())

// database connection
await connectDB()


// routes
app.get('/', (req, res) => {
  res.send("API is working")
})

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
// export app for Vercel
export default app


// 2:09 start from here to create this project
