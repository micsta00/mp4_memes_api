const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dislikedSchema = new Schema({
    data_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { collection: "disliked" })

module.exports = mongoose.model('Dis', dislikedSchema)
