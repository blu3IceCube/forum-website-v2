const mongoose = require('mongoose')

const uri = process.env.URI

mongoose.connect(uri).then(() => {
    console.log('Connected to DB')
}).catch((err) => {
    console.log('Connection error', err)
})