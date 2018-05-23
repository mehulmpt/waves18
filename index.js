const express = require('express')
const app = express()

const mongoose = require('mongoose')

(async function() {
    await mongoose.connect('mongodb://localhost/waves') // mongo up
    
    app.get('/', (req, res) => {
        console.log('Waves 2018 website coming soon!')
    })

    app.listen(1337, () => console.log('Listening on [::1]:1337'))
})()
