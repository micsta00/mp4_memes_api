const express = require('express')

const {
    getDisliked,
    createDisliked
} = require('../controllers/dislikedController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all favorites
router.get('/', getDisliked)

// POST a new favorite
router.post('/', createDisliked)

module.exports = router