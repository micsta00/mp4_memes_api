const express = require('express')

const {
    getFavorites,
    createFavorite
} = require('../controllers/favoritesController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all favorites
router.get('/', getFavorites)

// POST a new favorite
router.post('/', createFavorite)

module.exports = router