const express = require('express')
const {
    getMemes,
    getMeme
} = require('../controllers/memeController')

const router = express.Router()

// GET all memes
router.get('/', getMemes)

// GET a single meme
router.get('/:id', getMeme)



module.exports = router