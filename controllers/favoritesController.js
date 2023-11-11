const Fav = require('../models/favoritesModel')
const mongoose = require('mongoose')

// get all favorite memes
const getFavorites = async (req, res) => {
    const favorites = await Fav.find({})
    res.status(200).json(favorites)
}

// create new favorite
const createFavorite = async (req, res) => {
    const { data_id } = req.body

    // add doc to db
    try {
        const user_id = req.user._id
        const favorite = await Fav.create({ data_id, user_id })
        res.status(200).json(favorite)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getFavorites,
    createFavorite
}
