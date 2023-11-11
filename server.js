require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const memeRoutes = require('./routes/memes')
const userRoutes = require('./routes/user')
const favoritesRoutes = require('./routes/favorites')
const dislikedRoutes = require('./routes/disliked')

// express app
const app = express()

app.use(cors())

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/memes/mp4', memeRoutes)
app.use('/api/user', userRoutes)
app.use('/api/memes/favorites', favoritesRoutes)
app.use('/api/memes/disliked', dislikedRoutes)


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

