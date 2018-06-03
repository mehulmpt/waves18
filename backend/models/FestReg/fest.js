const mongoose = require('mongoose')

const FestSchema = mongoose.Schema({
    name: String,
    email: String,
    college: String,
    mobile: String
}, { collection: 'festreg' })

const model = mongoose.model('FestSchema', FestSchema)
module.exports = model