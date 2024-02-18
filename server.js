const express = require('express')
const dotenv = require('dotenv').config()
const helmet = require('helmet')
//Set access control to allow origin with CORS
// Change colors of messages in console
const colors = require('colors')
const errorHandler = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')

// Connect to database
connectDB()

const app = express()

/* Make app secure */
// Set security headers 
// app.use(helmet())
// // Reduce server fingerprinting
// app.disable('x-powered-by')
// Make https by setting httponly
// Enable compression for express to save bandwidth with compress()

// Set body parser middleware to send json object
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to take note app'})

})

// Routes
app.use('/users', require('./routes/userRoutes'))

// error Handler message
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})