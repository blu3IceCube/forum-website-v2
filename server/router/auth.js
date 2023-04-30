const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/connection')
const User = require('../model/userSchema')


router.get('/', (req, res) => {
    res.send('Router setup properly')
})


// post async approach -----------

router.post('/signup', async (req, res) => {

    const { fname, lname, email, sid, bday, username, password, cpassword } = req.body

    if (!fname || !lname || !email || !sid || !bday || !username || !password || !cpassword) {
        return res.status(422).json({ error: 'Please fill all required details.' })
    }

    try {

        const response = await User.findOne({ email: email });
        if (response) {
            return res.status(422).json({ error: 'Email already registered.' })

        } else if (password != cpassword) {
            return res.status(422).json({ error: 'Passwords do not match.' })

        } else {
            const user = new User({ fname, lname, email, sid, bday, username, password, cpassword })

            await user.save();

            res.status(201).json({ message: 'User successfully registered.' })
        }

    } catch (err) {
        console.log(err)
    }

})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log('loginuser', username, 'loginpass', password)

    if (!username || !password) {
        return res.status(400).json({ erroe: 'Please fill required fields.' })
    }

    try {

        const response = await User.findOne({ username: username })
        if (response) {

            const isMatch = await bcrypt.compare(password, response.password)

            if (isMatch) {
                res.status(200).json({ message: 'Login successful.' })

                const token = await response.generateAuthToken()

                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                })

            } else {
                return res.status(400).json({ error: 'Invalid credentials.' })
            }
        } else {
            return res.status(400).json({ error: 'Invalid credentials.' })
        }

    } catch (err) {
        console.log(err)
    }

})

module.exports = router