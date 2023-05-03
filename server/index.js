const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()

dotenv.config()
require('./db/connection')

app.use(express.json())
app.use(cookieParser())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next()
})

const corsOptions = {
    origin: true,
    Credentials: true,
}

app.use(cors(corsOptions))

app.use(require('./router/auth'))

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server up and running')
})