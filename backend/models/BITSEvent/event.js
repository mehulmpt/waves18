const mongoose = require('mongoose')

const BITSEventSchema = mongoose.Schema({
    name: String,
    email: String,
    college: String,
    mobile: String,
    event: String,
    city: String
}, { collection: 'festreg' })

const model = mongoose.model('BITSEventSchema', BITSEventSchema)
module.exports = model