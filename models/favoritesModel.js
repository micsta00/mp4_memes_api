const mongoose = require('mongoose')

const Schema = mongoose.Schema

const favoritesSchema = new Schema({
    data_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { collection: "favorites" })

module.exports = mongoose.model('Fav', favoritesSchema)
