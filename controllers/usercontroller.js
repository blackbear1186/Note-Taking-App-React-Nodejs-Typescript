const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const throwError = require('../throwError')

// Route: /users
// Wrap function in asyncHandler
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(user)

  if (!name || !email || !password) {
    throwError(res,400,'Please include all fields')
  }

  // Find if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throwError(res,400,'User already Exists')
  }

  // Call hashedPassword
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // if user is created send the data back to server
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // send a jsonwebtoken
      token: generateJsonWebToken(user._id)
    });
  } else {
    throwError(res,400,'Invalid User data')
  }
});

// Route: /users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Check if user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJsonWebToken(user._id)
    });
  }
  else {
    throwError(res,401,'Invalid credentials')
  }
});

// Route: /users/me
// Description: Get current User
const getCurrentUserAccountInfo = asyncHandler(async (req,res) => {
    const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json(user)
})

// Generate token
const generateJsonWebToken = (id) => {
    // get secret from .env and set to expire in 30 days
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
  registerUser,
  loginUser,
  getCurrentUserAccountInfo
};
