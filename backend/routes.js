const path = require('path')
const BITSEvent = require('./models/BITSEvent')
const Message = require('./models/Messages')
const fs = require('fs')

function customValidation(name, email, college, mobile, event) {
    return true // implement this
}

module.exports = function(app) {


app.get('/', (req, res) => {
    const file = path.resolve(__dirname, '../frontend/templates/index.html')
    res.sendFile(file)
})

app.get('/event/:eventname', (req, res, next) => {
    
    const eventname = req.params.eventname

    const file = path.resolve(__dirname, `../frontend/templates/events/${eventname}.html`)
    if(fs.existsSync(file)) {
        return res.sendFile(file)
    }
    next()
})
app.get('/:page', (req, res, next) => {
    
    const page = req.params.page

    if(page == "index" || page == "404") return next()

    const file = path.resolve(__dirname, `../frontend/templates/${page}.html`)
    if(fs.existsSync(file)) {
        return res.sendFile(file)
    }
    next()
})
app.post('/event/:eventname', async (req, res) => {
    let event = req.params.eventname
    const validevents = ['irshad', 'smtf', 'inverse', 'fest-registration']
    if(validevents.indexOf(event) == -1) return res.json({status: 'error'})

    event = req.body.eventname || event

    //debugger
    const { name, email, collegename, mobile, city } = req.body
    /*if(!name || !email || !collegename || !mobile) {
        return res.status(500).json({ status: 'error', message: 'All fields required' })
    }*/

    if(customValidation(name, email, collegename, mobile, event)) { // TODO: Implement this validation
        const result = await BITSEvent.addEntry(name, email, collegename, mobile, event, city)
        if(result.status == 'error') return res.status(500).json({ status: 'error', message: result.message })
        return res.redirect('/entrySuccess')
    }
}) 



app.post('/contact-us', async (req, res) => {
    const {name, email, subject, message} = req.body
    res.json(await Message.addEntry({name, email, subject, message}))
})

}