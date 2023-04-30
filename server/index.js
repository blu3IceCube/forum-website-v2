const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
require('./db/connection')

app.use(express.json())

app.use(cors())

app.use(require('./router/auth'))



const port = process.env.PORT

//const User = require('./model/userSchema')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/signup', (req, res) => {
//     console.log(req.body)

//     res.json({data:req.body})
// })

app.listen(port, () => {
    console.log('Server up and running')
})