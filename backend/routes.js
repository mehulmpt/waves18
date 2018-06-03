const path = require('path')
const Fest = require('./models/FestReg')

function customValidation(name, email, college, mobile) {
    return true // implement this
}

module.exports = function(app) {


app.get('/', (req, res, next) => {
    const file = path.resolve(__dirname, '../frontend/templates/index.html')
    res.sendFile(file)
})

app.get('/event/:eventname', (req, res) => {
    const file = path.resolve(__dirname, `../frontend/templates/${event}.html`)
    if(fs.existsSync(file)) {
        return res.sendFile(file)
    }
    next()
})


app.post('/fest-registration', async (req, res) => {
    //debugger
    const { name, email, college, mobile } = req.body
    if(!name || !email || !college || !mobile) {
        return res.status(500).json({ status: 'error', message: 'All fields required' })
    }

    if(customValidation(name, email, college, mobile)) { // TODO: Implement this validation
        const result = await Fest.addEntry(name, email, college, mobile)

        if(result.status == 'error') return res.status(500).json({ status: 'error', message: result.message })
        return res.json({ status: 'ok' })
    }
})


}