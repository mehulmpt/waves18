const BITSEvent = require('./event')

async function addEntry(name, email, college, mobile, event) {
    // other validation?
    // const check = await BITSEvent.findOne({ college, event })
    const check = false
    if(check) {
        return { status: 'error', message: `College already registered by ${check.email} | ${check.mobile} for ${check.event}`}
    }
    const entry = new BITSEvent({name, email, college, mobile, event})
    await entry.save()
    return { status: 'ok' }
}

module.exports = { addEntry }