const mongoose = require('mongoose')

const Schema = mongoose.Schema

const favoritesSchema = new Schema({
    data_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    votes_up: {
        type: Number,
        required: true
    },
    votes_down: {
        type: Number,
        required: true
    },
    ts: {
        type: Number,
        required: true
    },
}, { collection: "favorites" })

module.exports = mongoose.model('Fav', favoritesSchema)
