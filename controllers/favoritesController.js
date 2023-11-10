const Fav = require('../models/favoritesModel')
const mongoose = require('mongoose')

// get all favorite memes
const getFavorites = async (req, res) => {
    const favorites = await Fav.find({}).sort({ ts: -1 })

    res.status(200).json(favorites)
}


module.exports = {
    getFavorites,
}