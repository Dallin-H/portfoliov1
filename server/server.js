const express = require('express')
const bodyParser = require('body-parser')

// invoking express and using bodyParser middleware
const app = express()
app.use(bodyParser.json())

// ***This is what runs the server*** \\
app.listen(3001,() => {
    console.log('server running on 3001')
})