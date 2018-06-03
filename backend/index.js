const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')

;(async function() {
    await mongoose.connect('mongodb://localhost/waves') // mongo up

    app.use(express.static(path.join(__dirname, '../frontend')))
    
    app.use(bodyParser.json())
    
    routes(app)

    app.get('*', (req, res) => {
        res.status(404).sendFile(path.resolve(__dirname, '../frontend/templates/404.html'))
    })

    app.listen(1337, () => console.log('Listening on [::1]:1337'))


})()
