const mongoose = require('mongoose')
const Schema = mongoose.Schema

const validateEmail = (email) => {
    const regex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
    return regex.test(email)
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'Email address required'
    }
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel