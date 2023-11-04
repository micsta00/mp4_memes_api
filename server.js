require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const memeRoutes = require('./routes/memes')
// express app
const app = express()

// app.use(
//   cors({
//     allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
//     exposedHeaders: ["authorization"], // you can change the headers
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
//   })
// )
app.use(cors())

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/memes/mp4', memeRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    let PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
      console.log('connect to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

