const express = require('express')
const {
    getMemes,
    getMeme
} = require('../controllers/memeController')

const {
    getFavorites,
    createFavorite
} = require('../controllers/favoritesController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all memes
router.get('/', getMemes)

// GET a single meme
router.get('/:id', getMeme)



module.exports = router