const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")

const authenticate = async (req, res, next) => {
    try{
        const token = req.cookies.jwtToken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})

        const user = await User.findById(verifyToken._id)

        if(!rootUser) {throw new Error('User not found')}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id
        req.user = user

        next()

    }catch(err) {
        res.status(401).send('Unauthorized: Invalid or missing token provided.')
    }
}

module.exports = authenticate