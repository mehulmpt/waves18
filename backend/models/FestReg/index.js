const FestReg = require('./fest')

async function addEntry(name, email, college, mobile) {
    // other validation?
    const check = await FestReg.findOne({ college })
    if(check) {
        return { status: 'error', message: `College already registered by ${check.email} | ${check.mobile}`}
    }
    const entry = new FestReg({name, email, college, mobile})
    await entry.save()
    return { status: 'ok' }
}

module.exports = { addEntry }