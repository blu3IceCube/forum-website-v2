const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

require('../db/connection')
const User = require('../model/userSchema')
const Post = require('../model/postSchema')
const authenticate = require('../middleware/authenticate')

router.use(cookieParser())

router.get('/', (req, res) => {
    res.send('Router setup properly')
})


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

    if (!username || !password) {
        return res.status(400).json({ error: 'Please fill required fields.' })
    }

    try {

        const response = await User.findOne({ username: username })
        if (response) {

            const isMatch = await bcrypt.compare(password, response.password)

            if (isMatch) {

                const token = await response.generateAuthToken()

                res.cookie('jwtToken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true,
                    secure: false
                })

                res.status(200).json({ message: 'Success', token })

            } else {
                return res.status(400).json({ error: 'Invalid credentials.' })
            }
        } else {
            return res.status(400).json({ error: 'Invalid credentials.' })
        }

    } catch (err) {
        console.log('router-login-error', err)
    }

})

router.get('/home', authenticate, (req, res) => {
    res.status(200).send(req.rootUser)
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwtToken')
    res.status(200).send('User logout')
})

router.post('/compose', authenticate, async (req, res) => {
    const { forumName, title, content } = req.body
    const userName = req.user.username

    const response = await Post.findOne({ forumName: forumName })

    response.posts.push({userName: userName, title: title, content: content})
    await response.save()
    res.status(201).send('Post creted successfully')
})

router.post('/community', authenticate, async (req, res) => {
    const { forumName, forumInfo } = req.body
    const forum = new Post({ forumName, forumInfo })
    await forum.save()
    res.status(201).send('Your community page is ready.')
})

router.get('/community', async (req, res) => {
    try {
        const forums = await Post.find()
        res.status(200).send(forums)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

module.exports = router