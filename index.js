const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Waves 2018 website coming soon')
})

app.listen(1337, () => console.log('Listening on [::1]:1337'))