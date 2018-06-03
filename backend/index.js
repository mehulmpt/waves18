const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const fs = require('fs')

;(async function() {
    await mongoose.connect('mongodb://localhost/waves') // mongo up

    app.use(express.static(path.join(__dirname, '../frontend')))
    
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

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/templates/404.html'))
    })

    app.listen(1337, () => console.log('Listening on [::1]:1337'))


})()
