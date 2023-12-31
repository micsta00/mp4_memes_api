const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    // token creating
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // static method created in userModel
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)
        const user_id = user._id

        res.status(200).json({ email, token, user_id })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // static method created in userModel
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser }