const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')

;(async function() {

    const mongoPort = process.env.NODE_ENV === 'production' ? 18510 : 27017
    const nodePort = process.env.NODE_ENV === 'production' ? 28221: 1337

    await mongoose.connect(`mongodb://localhost:${mongoPort}/waves`) // mongo up

    app.use(express.static(path.join(__dirname, '../frontend')))
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    routes(app)

    app.get('*', (req, res) => {
        res.status(404).sendFile(path.resolve(__dirname, '../frontend/templates/404.html'))
    })

    app.listen(nodePort, () => console.log(`Listening on [::1]:${nodePort}`))
})()
