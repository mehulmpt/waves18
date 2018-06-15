const BITSEvent = require('./event')

async function addEntry(name, email, college, mobile, event, city = 'not available') {
    const check = false
    if(check) {
        return { status: 'error', message: `College already registered by ${check.email} | ${check.mobile} for ${check.event}`}
    }
    const entry = new BITSEvent({name, email, college, mobile, event, city})
    await entry.save()
    return { status: 'ok' }
}

module.exports = { addEntry }