const errorHandler = (err,req,res,next) => {
    // Get and set status code
    const statusCode = res.statusCode ? res.statusCode : 500
    // Send eror json message
    res.status(statusCode)

    // get error message and only get stack trace if not in production mode
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV == 'production' ? null : err.stack
    })
}

module.exports = errorHandler