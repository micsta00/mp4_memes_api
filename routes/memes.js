const express = require('express')
const {
    getMemes,
    getMeme
} = require('../controllers/memeController')

const {
    getFavorites,
} = require('../controllers/favoritesController')

const router = express.Router()

// GET all memes
router.get('/', getMemes)

// GET a single meme
router.get('/:id', getMeme)

// GET all favorites
router.get('/favorites', getFavorites)



module.exports = router