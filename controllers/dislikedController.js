const Dis = require('../models/dislikedModel')
const mongoose = require('mongoose')

// get all favorite memes
const getDisliked = async (req, res) => {
    const disliked = await Dis.find({})
    res.status(200).json(disliked)
}

// create new favorite
const createDisliked = async (req, res) => {
    const { data_id } = req.body

    // add doc to db
    try {
        const user_id = req.user._id
        const disliked = await Dis.create({ data_id, user_id })
        res.status(200).json(disliked)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getDisliked,
    createDisliked
}
