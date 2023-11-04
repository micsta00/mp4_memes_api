const Meme = require('../models/memeModel')
const mongoose = require('mongoose')

// get all memes
const getMemes = async (req, res) => {
    const memes = await Meme.find({}).sort({ ts: -1 })

    res.status(200).json(memes)
}


// get a single meme
const getMeme = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such meme' })
    }

    const meme = await Meme.findById(id)

    if (!meme) {
        return res.status(404).json({ error: 'No such meme' })
    }

    res.status(200).json(meme)
}



module.exports = {
    getMemes,
    getMeme
}