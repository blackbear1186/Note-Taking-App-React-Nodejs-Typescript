const asyncHandler = require("async-handler")

// @route /users
// Wrap function in asyncHandler function to replace try/catch block
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password}= req.body
    // console.log(user)

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    res.send('Register Route')
})

// @route /users/login
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}