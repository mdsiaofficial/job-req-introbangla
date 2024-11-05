const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRouter = require('./src/routes/userRouter');
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// here to use the middleware...
app.use(express.json()) // all response to json

// db
mongoose.connect(process.env.dbUrl)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

  // routes
app.get('/', (req, res) => {
  res.status(200).json({ message: "home" })
})
app.use('/api/v1', userRouter)

// server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})