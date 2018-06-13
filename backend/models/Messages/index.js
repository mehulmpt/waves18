const Message = require('./message')

async function addEntry({name, email, subject, message}) {
    // other validation?
    const entry = new Message({name, email, subject, message})
    await entry.save()
    return { status: 'ok' }
}

module.exports = { addEntry }