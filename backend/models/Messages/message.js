const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
}, { collection: 'messages' })

const model = mongoose.model('MessageSchema', MessageSchema)
module.exports = model